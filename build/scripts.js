(function() {
  'use strict';

  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  gulp.task('scripts', function() {
    return gulp
      .src('src/*.html')
      .pipe($.htmlMinify())
      .pipe($.jswork.pkgHeader({ type: 'html'}))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });
})();
