module.exports = function(grunt) {
  var webpack = require('webpack'),
      webpackConfig = require('../webpack.config.js');

  return {
    options: webpackConfig,
    prod: {
      plugins: webpackConfig.plugins.concat(
        new webpack.optimize.UglifyJsPlugin(
          {
            minimize: true
          }
        )
      ),
      output: {
        filename: '<%= config.module %>.bundle.min.js',
        chunkFilename: '[id].<%= config.module %>.bundle.min.js',
        sourceMapFilename: '<%= config.module %>.bundle.min.map'
      }
    },
    dev: {
      cache: false,
      debug: true
    }
  }
};
