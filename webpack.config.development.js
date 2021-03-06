const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.config.parts');
const path = require('path');
const fs = require('fs');

const PATHS = {
  nodeModules: path.join(__dirname, 'node_modules'),
  app: path.join(__dirname, 'app'),
  server: path.join(__dirname, 'app', 'server.js'),
  style: path.join(__dirname, 'app', 'styles'),
  build: path.join(__dirname, 'build')
};

let config = merge(
  {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      hot: true,
      inline: true,
      port: 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  },
  parts.cssSetup(PATHS.app),
  parts.babel(PATHS.app)
);

module.exports = config;
