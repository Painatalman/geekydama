// basic setup
var path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const srcFolder = path.resolve(__dirname, "src");

module.exports = {
  entry: [path.resolve(srcFolder, "index.ts")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: "#eval-source-map",
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg|woff(2)?|ttf|eot|otf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "~": srcFolder
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    historyApiFallback: true
  }
};
