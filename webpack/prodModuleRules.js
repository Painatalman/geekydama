module.exports = [
  {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      "image-webpack-loader"
    ]
  }
];
