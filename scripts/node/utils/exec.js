// Utils :: Exec
'use strict';

var exec = require('child_process').exec;

var ex = function(task, callback) {
  return exec(task, function(err, stdout, stderr) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stdout);
  })
  .on('close', callback);
};

module.exports = ex;
