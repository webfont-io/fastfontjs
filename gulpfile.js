var gulp = require("gulp");
var ts = require("gulp-typescript");
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var tsProject = ts.createProject("tsconfig.json");

gulp.task('build', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

gulp.task('compress', function () {
    return pipeline(
          gulp.src('dist/*.js'),
          uglify(),
          gulp.dest('dist')
    );
});

gulp.task('default', gulp.series('build'));