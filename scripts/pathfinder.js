// Sass Pathfinder
// Source: https://github.com/ItsJonQ/sass-pathfinder

var pathfinder = function() {
  var paths = Array.prototype.slice.call(arguments);
  return [].concat.apply([], paths);
};

module.exports = pathfinder;
