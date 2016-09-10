const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.cssSetup = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'),
          include: paths
        }
      ]
    },
    postcss: function () {
      return [
        require('postcss-nested')(),
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
  };
}

exports.setFreeVariable = function (key, value) {
  const env = {};
  env[key] = JSON.stringify(value);
  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}

exports.babel = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          exclude: /node_modules/,
          include: paths
        }
      ]
    }
  };
}

exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}
