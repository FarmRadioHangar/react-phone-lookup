var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  return browserify({entries: './js/examples/main.jsx', extensions: ['.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'stage-1', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/examples'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);
