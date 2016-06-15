// Base :: Clean :: Default
'use strict';

var config = global.config;
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(callback) {
  return del([global.config.dest]);
});
