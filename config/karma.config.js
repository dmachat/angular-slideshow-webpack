'use strict';

var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    reporters: ['html', 'dots'],
    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/jquery/dist/jquery.js',
      './test.bundle.js'
    ],
    preprocessors: {
      './test.bundle.js': ['webpack']
    },
    webpack: webpackConfig,
    plugins: [
      require('karma-webpack'),
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter'
    ],
  });
};
