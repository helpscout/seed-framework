// Pipes :: Header
'use strict';

var config = global.config;
var gulp = require('gulp');
var header = require('gulp-header');
var lazypipe = require('lazypipe');
var pkg = global.package;

var banner = ['/**',
  ' * <%= config.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
  ' * <%= pkg.description %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/helpscout/seed/blob/master/LICENSE)',
  ' */',
  ''].join('\n');

var pipe = lazypipe()
  .pipe(function() {
    return header(banner, {
      config: config,
      pkg: pkg
    });
  });

module.exports = pipe;
