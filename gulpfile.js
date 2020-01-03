'use strict'

let gulp =          require('gulp');
let sass =          require('gulp-sass');
let browserSync =   require('browser-sync');

gulp.task('sass', gulp.series(function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream())
}))

gulp.task('serve', gulp.series('sass', function() {
    browserSync.init({
        server: "."
    });

    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
  })
);