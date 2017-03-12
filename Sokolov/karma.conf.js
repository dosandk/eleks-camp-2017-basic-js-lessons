// Karma configuration
// Generated on Sat Feb 25 2017 18:43:31 GMT+0200 (EET)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts',
      'src/util.js',
      'src/**/*.js',
      'test/**/*.spec.js'
    ],
    port: 9876,
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-typescript'
    ]
  });
};
