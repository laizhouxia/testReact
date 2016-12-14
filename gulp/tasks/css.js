var gulp = require('gulp');
var config = require('../config').css;

gulp.task('css', ['cleanCss'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
