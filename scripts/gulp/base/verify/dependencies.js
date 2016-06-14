// Base :: Verify :: Dependencies
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('verify-dependencies', function(callback) {
  console.log('Verifying dependencies!');

  runSequence(
    'verify-npm',
    'verify-bower',
    callback
  );
});

