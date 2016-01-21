// Karma configuration

module.exports = function (config) {
  config.set({
    // web server port
    port: 8109,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    customLaunchers: {
      ChromeOnTravis: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // frameworks: ['systemjs', 'jspm', 'jasmine'],
    frameworks: ['jspm', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [],

    // urlRoot: '/static/foo/',

    // list of files / patterns to exclude
    exclude: [],

    jspm: {
      config: 'config.js',
      loadFiles: ['test/**/*.js'],
      serveFiles: ['src/**/*.js'],
    }
  })
}
