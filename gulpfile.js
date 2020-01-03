'use strict'

let gulp =          require('gulp');
let sass =          require('gulp-sass');
let browserSync =   require('browser-sync');
/*
// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', gulp.series(function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
}));*/

gulp.task('sass', gulp.series(function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
}))

gulp.task('watch', gulp.series('sass', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
  })
);