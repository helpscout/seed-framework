// Pipes :: CSS Min
'use strict';

var cssmin = require('gulp-cssmin');
var gulp = require('gulp');
var lazypipe = require('lazypipe');
var rename = require('gulp-rename');

var pipe = lazypipe()
  .pipe(cssmin, {
    restructuring: false
  })
  .pipe(rename, {
    suffix: '.min'
  });

module.exports = pipe;
