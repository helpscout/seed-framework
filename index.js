var path = require('path');
var harvester = require('seed-harvester');

var files = harvester(
  path.join(__dirname, 'scss')
);

module.exports = files;
