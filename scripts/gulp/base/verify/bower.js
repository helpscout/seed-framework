// Base :: Verify :: Bower
'use strict';

var gulp = require('gulp');
var checkDependencies = require('check-dependencies');

gulp.task('verify-bower', function() {
  return checkDependencies({
    checkGitUrls: true,
    install: true,
    packageManager: 'bower',
    verbose: true
  });
});
