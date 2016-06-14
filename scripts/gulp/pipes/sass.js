// Pipes :: Sass
'use strict';

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var pipe = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(function() {
    return sass({
      includePaths: [
        global.config.src
      ]
    })
    .on('error', sass.logError);
  })
  .pipe(sourcemaps.write)
  .pipe(gulp.dest, global.config.dest);

module.exports = pipe;
