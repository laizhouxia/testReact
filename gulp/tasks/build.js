var gulp = require('gulp');

gulp.task('build', ['copy', 'babel', 'browserify', 'css']);
