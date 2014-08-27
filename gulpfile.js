var gulp = require('gulp'),
  gutil = require('gulp-util'),
  connect = require('gulp-connect'),

gulp.task('js', function() {
  gulp.src('builds/development/js/*.js')
    .pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
    .pipe(connect.reload())
});

gulp.task('css', function() {
  gulp.src('builds/development/css/*.css')
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('builds/development/js/*.js', ['js']);
  gulp.watch('builds/development/css/*.css', ['css']);
  gulp.watch(['builds/development/*.html',
    'builds/development/partials/*.html'], ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'connect']);
