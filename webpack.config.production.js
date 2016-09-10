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
    devtool: 'source-map',
    output: {
      publicPath: '/webpack-boiler/',
      chunkFilename: '[chunkhash].js'
    }
  },
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
  parts.babel(PATHS.app),
  parts.minify(),
  parts.cssSetup(PATHS.app)
);

module.exports = config;
