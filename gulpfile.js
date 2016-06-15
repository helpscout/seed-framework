// Gulpfile
'use strict';

global.config = require('./scripts/gulp/config');
global.exec = require('./scripts/node/utils/exec');
global.path = __dirname;
global.require = function(modulePath, options) {
  var log = true;

  if (options && typeof(options.log) !== 'undefined') {
    log = options.log;
  }

  try {
    return require(modulePath);
  }
  catch (e) {
    if (log) {
      console.log(modulePath + ' is missing!');
      console.log('\x1b[31m' + 'Try running: npm install' + '\x1b[0m');
    }
    return false;
  }
};


var gulp = global.require('gulp');
var requireDir = global.require('require-dir', { log: false });

// Require all tasks
if (requireDir) {
  requireDir('./scripts/gulp', { recurse: true });
}
else {
  gulp.task('default', function() {
    console.log('\x1b[31m' + 'Dependencies are missing!' + '\x1b[0m');
    console.log('\x1b[31m' + 'Try running: npm install' + '\x1b[0m');
  });
}
