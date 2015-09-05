var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , uglify = require('gulp-uglify')
  , notify = require('gulp-notify')
  , rename = require('gulp-rename');

var files {
  js: [
    './src/app.js',
    './src/directive/trufflecake.js'
  ]
};

gulp.task('minified')

gulp.task('default', function(){
  return gulp.src(files.js)
    // You can add options to jslint with {}
    .pipe(jshint())
    .pipe(gulp.dest('dist/'))
    .pipe()
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'))
    .pipe(notify({message: 'build complete'}));
});
