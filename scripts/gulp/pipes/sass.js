// Pipes :: Sass
'use strict';

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var pathfinder = require('sass-pathfinder');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var bourbon = require('bourbon').includePaths;
var seedGrid = require('seed-grid');
var seedSpacing = require('seed-spacing');
var seedWidth = require('seed-width');

var includePaths = pathfinder(
  global.config.src,
  bourbon,
  seedGrid,
  seedSpacing,
  seedWidth
);

var pipe = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(function() {
    return sass({
      includePaths: includePaths
    })
    .on('error', sass.logError);
  })
  .pipe(sourcemaps.write);

module.exports = pipe;
