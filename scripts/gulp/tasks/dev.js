// Tasks :: Dev
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(callback) {
  runSequence(
    'lint',
    'sass-base',
    'watch-sass'
  );
});
