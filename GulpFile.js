var gulp = require('gulp')
  , jslint = require('gulp-jslint');

var files {
  js: [
    './src/app.js',
    './src/directive/trufflecake.js'
  ]
};

gulp.task('default', function(){
  return gulp.src(files.js)
    // You can add options to jslint with {}
    .pipe(jslint())
    .on('error', function(err){
      throw err;
    });
});
