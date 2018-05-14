var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;
var cleanCSS = require('gulp-clean-css');

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
    gulp.watch("app/js/*.js").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
// 输出格式 :nested（默认输出） :expanded :compact :compressed
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest("app/css"))
        .pipe(reload({stream: true}));
});

//压缩CSS
gulp.task('minify-css', function() {
    return gulp.src('app/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/app/css'));
}); 

gulp.task('default', ['serve']);