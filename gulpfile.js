var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
                                   

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});


gulp.task('browser-sync', function() {
    /*browserSync.init({
        proxy: "exemplo.local",
        notify: false
    });*/

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    gulp.watch(["./app/**/*"]).on('change', browserSync.reload);
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));

});