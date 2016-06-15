// Base :: Sass :: Lint
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var lint = require('gulp-scss-lint');

var exec = require('child_process').exec;
var parse = function(data) {
  return data.toString().replace(/\n\s*\n/g,'');
};

var commandOptions = {
  env: process.env,
  cwd: process.cwd(),
  maxBuffer: 300 * 1024,
};

var lintProcess = function() {
  gutil.log(gutil.colors.yellow('Testing your .scss files…'));
  return new Promise(function(resolve, reject) {
    exec('bundle exec scss-lint', commandOptions, function(error, report) {
      if (report) {
        return reject(report);
      }
      // Check for important error codes
      if(error && error.code !== 1 && error.code !== 2 && error.code !== 65) {
        return reject(report);
      }
      return resolve(report);
    });
  });
};

gulp.task('lint', function(callback) {
  return lintProcess()
    .then(function(report) {
      var message = gutil.colors.green('Passed! Your .scss looks spectacular');
      gutil.log(message, '😄');
    })
    .catch(function(report) {
      var message = gutil.colors.red('Failed: There were errors in your .scss');
      gutil.log(message, '😱');
      console.log(parse(report));
      process.exit(1);
    });
});
