// basic setup
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const commonModuleRules = require("./webpack/commonModuleRules");
const devModuleRules = require("./webpack/devModuleRules");

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
    rules: [...commonModuleRules, ...devModuleRules]
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
