// Base :: Header :: Default
'use strict';

var config = global.config;
var gulp = require('gulp');
var header = require('gulp-header');
var pkg = global.package;

var banner = ['/**',
  ' * <%= config.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
  ' * <%= pkg.description %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/helpscout/seed/blob/master/LICENSE)',
  ' */',
  ''].join('\n');

gulp.task('header', function(callback) {
  return gulp.src(global.config.dest + '/*.css')
    .pipe(header(banner, {
      config: config,
      pkg: pkg
    }))
    .pipe(gulp.dest(global.config.dest))
    .on('close', callback);
});
