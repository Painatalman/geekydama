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
      {
        loader: "image-webpack-loader",
	options: {
	  optipng: { enabled: false },
	  pngquant: { enabled: false}
	}	
      }
    ]
  }
];
