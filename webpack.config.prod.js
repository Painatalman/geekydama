const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const devConfig = require("./webpack.config.js");
const commonModuleRules = require("./webpack/commonModuleRules");
const prodModuleRules = require("./webpack/prodModuleRules");

module.exports = {
  ...devConfig,
  mode: "production",
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [...commonModuleRules, ...prodModuleRules]
  },
  plugins: [
    ...devConfig.plugins,
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: `"production"`
      }
    })
  ]
};
