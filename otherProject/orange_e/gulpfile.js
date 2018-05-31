/**
 * gulp-file-include
 * @type {[type]}
 */
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
//var browserSync = require('browser-sync');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/**
 * 监听html、scss、css、js任务，并执行相关任务
 * @param  {[type]} ) { gulp.watch('./src*.html', ['html']);  gulp.watch(['./src*.scss|*.css'], ['scss']);  gulp.watch('./src/views*.js', ['webpack']);  console.log('已监听html,style,js文件改动')} [description]
 * @return {[type]}   [description]
 */
gulp.task('watch', function() {
  gulp.watch('./src/js/*.js').on('change', reload);
  gulp.watch('./src/css/*.css').on('change', reload);
  gulp.watch('./src/views/*.html').on('change', reload);
  gulp.watch('./src/views/**/*.html').on('change', reload);
  console.log('已监听html, style, css, js文件改动')
});


/**
 * 服务器配置，使用9100端口, baseDir是服务器访问目录，index是指默认端口打开的页面；
 * @param  {[type]} )
 * @return {[type]}     [description]
 */
gulp.task('serve', function(){
    browserSync.init({   //启动服务
        server: {
            baseDir: "./src/"
        }
    });
    /*browserSync({
  	    server: './src/'
    });*/
    console.log('BS服务启动成功')
});

//gulp.task('default',['build'])
//gulp.task('default',['serve'])
gulp.task('default',['serve','watch'])