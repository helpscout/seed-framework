var gulp        = require('gulp');
var cssmin      = require('gulp-cssmin');
var exec        = require('child_process').exec;
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');

var config = {
  src: 'scss',
  dist: 'css'
};

// Sass
gulp.task('sass', function () {
  return gulp.src([
    config.src + '/seed.scss'
  ])
  .pipe(plumber())
  .pipe(
    sass({
      includePaths: [
        config.src
      ],
    })
    .on('error', sass.logError)
  )
  .pipe(gulp.dest(config.dist));
});


// Minify
gulp.task('min', ['sass'], function () {
  return gulp.src([
    config.dist + '/seed.css'
  ])
  .pipe(cssmin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(config.dist));
});


// Watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});



// Default
gulp.task('default', ['sass', 'watch']);

// Build
gulp.task('build', ['sass', 'min']);
