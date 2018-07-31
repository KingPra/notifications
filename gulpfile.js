const gulp = require('gulp');
const sass = require('gulp-sass');
const strip = require('gulp-strip-comments');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minifier');


gulp.task('default', ['html', 'css', 'js', 'browserSync']);

function handleError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('html', () => {
  gulp.src('index.html')
  .pipe(strip())
  .pipe(minify({
    minify: true,
    minifyHTML: {
      collapseWhitespace: true
    }
  }))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('css', () => {
  gulp.src('style.scss')
  .pipe(sass())
  .on('error', handleError)
  .pipe(minify({
    minify: true,
    minifyCSS: true
  }))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('js', () => {
  gulp.src('app.js')
  .pipe(strip())
  .pipe(minify({
    minify: true,
    minifyJS: true
  }))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('index.html', ['html']);
  gulp.watch('style.scss', ['css']);
  gulp.watch('app.js', ['js']);
});
