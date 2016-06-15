// Base :: Sass :: Lint
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var lint = require('gulp-scss-lint');

gulp.task('lint', function(callback) {
  return gulp.src([
      global.config.src + '/**/*.scss',
      '!' + global.config.src + '/vendors/**/*'
    ])
    .pipe(lint({
      bundleExec: true,
      customReport: reporter,
      endless: true
    }))
    .pipe(lint.failReporter())
    .on('close', callback);
});
