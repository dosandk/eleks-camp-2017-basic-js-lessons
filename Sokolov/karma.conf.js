// Karma configuration
// Generated on Sat Feb 25 2017 18:43:31 GMT+0200 (EET)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]
  });
};
