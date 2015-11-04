var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  target = 'builds/angular/';

gulp.task('js', function() {
  gulp.src(target + 'js/**/*');
});

gulp.task('html', function() {
  gulp.src(target + '*.html');
});

gulp.task('css', function() {
  gulp.src(target + 'css/*.css');
});

gulp.task('watch', function() {
  gulp.watch(target + 'js/**/*', ['js']);
  gulp.watch(target + 'css/*.css', ['css']);
  gulp.watch([target + '*.html',
    target + 'views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src(target)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
