const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const devConfig = require("./webpack.config.js");

module.exports = {
  ...devConfig,
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    ...devConfig.plugins,
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production"
      }
    })
  ]
};
