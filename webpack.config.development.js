const webpack = require('webpack');

let config = {
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
};

module.exports = config;
