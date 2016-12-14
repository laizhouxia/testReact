var gulp = require('gulp');
var del = require('del');

gulp.task('cleanJs', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build/static/js/**']).then(paths => {
      console.log('deleted file ', paths);
      cb();
  });
});


gulp.task('cleanCss', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build/static/css/**']).then(paths => {
      console.log('deleted file ', paths);
      cb();
  });
});

