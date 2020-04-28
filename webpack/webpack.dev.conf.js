const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    port: 3000,
    overlay: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ]
});
