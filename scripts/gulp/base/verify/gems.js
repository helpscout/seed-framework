// Base :: Verify :: Gems
'use strict';

var gulp = require('gulp');

gulp.task('verify-gems', function(callback) {
  var task = 'bundle install';
  return global.exec(task, callback);
});
