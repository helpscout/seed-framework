// Base :: Verify :: npm
'use strict';

var gulp = require('gulp');
var checkDependencies = require('check-dependencies');

gulp.task('verify-npm', function() {
  return checkDependencies({
    checkGitUrls: true,
    install: true,
    packageManager: 'npm',
    verbose: true
  });
});

