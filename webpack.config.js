const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');


const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  nodeModules: path.resolve(__dirname, 'node_modules'),
  app: path.join(__dirname, 'app'),
  server: path.join(__dirname, 'app', 'server.js'),
  style: path.join(__dirname, 'app', 'styles'),
  build: path.join(__dirname, 'build')
};

let config;

const common = {
  entry: {
    app: path.join(PATHS.app, 'App.js')
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: 'template.html',
      appMountId: 'App'
    })
  ]
};

switch(TARGET) {
  case 'build':
    config = merge(common, require('./webpack.config.production'));
    break;
  default:
    config = merge(common, require('./webpack.config.development'));
}

module.exports = validate(config);
