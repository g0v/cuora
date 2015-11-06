import gulp         from 'gulp';
import webserver    from 'gulp-webserver';
import ip           from 'ip';

let config = {};

config.buildPath = '.';
config.port = 3000;
config.localhost = ip.address() || 'localhost';

gulp.task('html', () => {
  return gulp.src('./*.html')
});

gulp.task('css', () => {
  return gulp.src('./css/*.css')
});

gulp.task('js', () => {
  return gulp.src('./js/*.js')
});

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(webserver({
      host: config.localhost,
      port: config.port,
      livereload: true,
      open: true
    })
  );
});

gulp.task('watch', (done) => {
  gulp.watch('./css/*.css', ['css']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('*.html', ['html']);
  done();
});

gulp.task('dev', ['webserver', 'watch']);
gulp.task('default', ['dev']);
