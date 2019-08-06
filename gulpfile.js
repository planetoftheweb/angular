var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  source = "./builds/angular/",
  dest = "./builds/angular/";

function html() {
  return gulp.src(dest + "**/*.html");
}

function js() {
  return gulp.src(dest + "**/*.js");
}

function styles() {
  return gulp.src(dest + "**/*.css");
}

function watch() {
  gulp.watch(source + "js/**/*.js", js).on("change", browserSync.reload);
  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(source + "index.html", html).on("change", browserSync.reload);
}
function server() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: source
    }
  });
}

  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(source + "index.html", html).on("change", browserSync.reload);
  gulp.watch(source + "index.html", js).on("change", browserSync.reload);

var build = gulp.series(gulp.parallel(js, styles, html), server, watch);

gulp.task("default", build)
