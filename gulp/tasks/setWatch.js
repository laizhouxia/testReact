var gulp = require('gulp');
var globalConfig = require('../../config');

gulp.task('setWatch', function() {
  global.isWatching = globalConfig.gulp.isWatching;
});
