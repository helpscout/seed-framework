// Base :: Verify :: Bundler
'use strict';

var gulp = require('gulp');

gulp.task('verify-bundler', function(callback) {
  var task = 'gem install bundler';
  return global.exec(task, callback);
});
