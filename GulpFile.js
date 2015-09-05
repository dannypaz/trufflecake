var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , uglify = require('gulp-uglify')
  , notify = require('gulp-notify')
  , rename = require('gulp-rename')
  , del = require('del');

var files = {
  js: [
    './src/directive/trufflecake.js'
  ]
};

gulp.task('minified')

gulp.task('default', ['clean'], function(){
  return gulp.src(files.js)
    // You can add options to jslint with {}
    .pipe(jshint())
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'))
    .pipe(notify({message: 'build complete'}));
});

gulp.task('clean', function(cb){
  del(['dist/'], cb);
});
