// Watch :: Sass
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var path = require('path');
var runSequence = require('run-sequence');

gulp.task('watch-sass', function () {
  gulp.watch([
    global.config.src + '/**/*',
    '!' + global.config.src + 'vendors/**/*'
  ], function() {
    runSequence(
      'lint',
      'sass-base'
    );
  })
  .on('change', function(event) {
    var file = event.path;
    gutil.log(path.basename(file) + ' was', gutil.colors.green('updated'));
  });
});
