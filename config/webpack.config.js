'use strict';

var path = require('path'),
    webpack = require('webpack'),

    buildRoot = path.join(__dirname, '../'),
    appRoot = path.join(buildRoot, 'src'),
    bowerRoot = path.join(buildRoot, 'bower_components'),
    modulesRoot = path.join(buildRoot, 'angular_modules');

module.exports = {
  cache: true, 

  context: appRoot,
  entry: './entry.es6',

  output: {
    path: path.join(buildRoot, 'dev'),
    filename: 'angular-slideshow.bundle.js',
    chunkFilename: '[id].angular-slideshow.bundle.js',
    sourceMapFilename: 'angular-slideshow.bundle.map'
  },

  devtool: 'source-map',

  plugins: [],

  externals: {
    'angular': 'angular',
    'jquery': 'jQuery'
  },

  resolveLoader: {
    root: path.join(buildRoot, 'node_modules')
  },

  module: {
    // prevent webpack from parsing library code for performance
    noParse: [bowerRoot],
    // loaders handle the transform pipes
    loaders: [
      // transpiles es6 -> es5
      {
        test: /\.es6\.js$/,
        loader: '6to5',
        exclude: /node_modules/
      },
      // includes template partials in angular's $templateCache
      {
        test: /\.html$/,
        loader: 'ngtemplate?module=dmachat.angularSlideshow&relativeTo=/src/!html'
      },
      // compile, prefix and load styles
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass?includePaths[]=' + path.join(buildRoot, 'node_modules/compass-mixins/lib')
      },
      // injects images into the bundle
      {
        test: /\.png$/,
        loader: 'url'
      }
    ]
  }
}
