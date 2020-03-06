module.exports = [
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
    test: /\.css$/,
    use: ["vue-style-loader", "css-loader", "postcss-loader"]
  },
  {
    test: /\.(woff(2)?|ttf|eot|otf)$/,
    loader: "file-loader",
    options: {
      name: "[name].[ext]"
    }
  }
];
