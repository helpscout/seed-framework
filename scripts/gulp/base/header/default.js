// Base :: Header :: Default
'use strict';

var gulp = require('gulp');
var header = require('../../pipes/header');

gulp.task('header', function(callback) {
  return gulp.src(global.config.dest + '/*.css')
    .pipe(header())
    .pipe(gulp.dest(global.config.dest))
    .on('close', callback);
});
