const gulp = require('gulp');

gulp.task('copy', () => {
    gulp.src('config/**')
        .pipe(gulp.dest('build/config/'))

    gulp.src('server/views/**')
        .pipe(gulp.dest('build/server/views'))
})