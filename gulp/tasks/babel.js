const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    gulp.src('server/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/server/'))

   gulp.src('client/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build/server/client'))
})