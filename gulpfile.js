const gulp = require('gulp');
const babel = require('gulp-babel');

// 监听JS文件
gulp.watch('src/app.js',['default']);

gulp.task('default', () =>{
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
    }
);

// sourcemaps
/*
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

// 监听JS文件
gulp.watch('src/app.js',['default']);
gulp.task('default', () =>
    gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist2'))
);*/