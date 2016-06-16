// Tasks :: Quick Test
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('quick-test', function(callback) {
  runSequence(
    'lint',
    'sass-base',
    callback
  );
});

// Alias
gulp.task('qt', ['quick-test']);
