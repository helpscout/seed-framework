// Tasks :: Default
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(callback) {
  runSequence(
    'sass-base',
    'watch-sass'
  );
});

