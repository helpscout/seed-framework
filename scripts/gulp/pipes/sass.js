// Pipes :: Sass
'use strict';

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var bourbon = require('bourbon').includePaths;
var seedGrid = require('seed-grid');

var pipe = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(function() {
    return sass({
      includePaths: [
        global.config.src,
        bourbon,
        seedGrid
      ]
    })
    .on('error', sass.logError);
  })
  .pipe(sourcemaps.write);

module.exports = pipe;
