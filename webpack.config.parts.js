const webpack = require('webpack');
const precss = require('precss');

exports.postcss = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: 'style!css?modules&importLoaders=1!postcss'
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
