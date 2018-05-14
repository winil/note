var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');
 
gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
    console.log("开始。。");
}); 
  
gulp.task('default', ['fileinclude']);  