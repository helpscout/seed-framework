# seed [![npm version](https://badge.fury.io/js/seed-framework.svg)](https://badge.fury.io/js/seed-framework)

Seed CSS Framework!

JS is powered by [Bootstrap.js](http://getbootstrap.com/javascript/)

## Install
```
npm install seed-framework --save
```

## WIP

This project has evolved like cray! There's lots more that needs to be added.

### Todo components

* [ ] Base styles
* [x] [Dropdowns](https://github.com/helpscout/seed-dropdown)
* [ ] Modal
* [x] [Popover](https://github.com/helpscout/seed-popover)
* [ ] Table
* [ ] Tooltips


## Documentation

You can find most of our documentation [here](http://style.helpscout.com/seed/packs/)!


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed/_index";
```
