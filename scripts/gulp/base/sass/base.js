// Base :: Sass :: Default
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('../../pipes/sass');

gulp.task('sass-base', function(callback) {
  return gulp.src(global.config.src + '/seed.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('close', callback);
});
