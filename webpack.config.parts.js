const webpack = require('webpack');

exports.cssSetup = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css?modules&importLoaders=1!postcss',
          include: paths
        }
      ]
    },
    postcss: function () {
      return [
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
      ]
    }
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
          test: /\.jsx$/,
          loaders: ['babel?cacheDirectory'],
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
