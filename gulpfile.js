var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var tsProject = ts.createProject("tsconfig.json");
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch("./src/**/*.*", gulp.series('build'));
    gulp.watch('./dist/**/*.js').on('change', browserSync.reload);
});
/*
gulp.task('watch',function(){
    return watch('./src/***.*', function () {
        gulp.start('build');	//执行html任务
        browserSync.reload(); //刷新浏览器
    });
});*/

gulp.task('build', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/js/'));
});

gulp.task('compress', function () {
    return pipeline(
          gulp.src('dist/*.js'),
          uglify(),
          gulp.dest('dist')
    );
});

gulp.task('default', gulp.series('build','browser-sync'));