// Pipes :: Sass
'use strict';

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var pathfinder = require('sass-pathfinder');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var bourbon = require('bourbon').includePaths;
var seedBreakpoints = require('seed-breakpoints');
var seedGrid = require('seed-grid');
var seedFloats = require('seed-floats');
var seedSpacing = require('seed-spacing');
var seedTypography = require('seed-typography');
var seedWidth = require('seed-width');

var includePaths = pathfinder(
  global.config.src,
  bourbon,
  seedBreakpoints,
  seedGrid,
  seedFloats,
  seedSpacing,
  seedTypography,
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
