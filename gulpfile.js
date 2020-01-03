'use strict'

let gulp =          require('gulp');
let sass =          require('gulp-sass');
let browserSync =   require('browser-sync');
let concat =        require('gulp-concat');

gulp.task('sass', gulp.series(function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream())
}))

gulp.task('serve', gulp.series('sass', function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/*.html').on('change', browserSync.reload);
  })
);