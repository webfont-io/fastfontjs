var gulp = require("gulp");
var uglify = require('gulp-uglify');
var gutil = require("gulp-util");
var webpack = require("webpack");
var config = require("./webpack.config.js");
var npm = require("./package.json");
var browserSync = require('browser-sync').create();
var fs = require('fs');
var rename = require("gulp-rename");

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch("./src/**/*.*", gulp.series('build'));
    gulp.watch('./dist/*.js').on('change', browserSync.reload);
    //,
});

gulp.task("reversion", async() => {
    await fs.writeFileSync("./src/version.ts","export default '" + npm.version + "'");
});


gulp.task("webpack",function() {
    return new Promise((resolve,reject) => {
        webpack(config, function(err,stats) {
            if (err) throw new gutil.PluginError("webpack",err);
            var statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow';
            if (stats.compilation.errors.length > 0) {
                stats.compilation.errors.forEach(function(error) {
                    console.log(error)
                    statColor = "red";
                });
            } else {
                gutil.log(stats.toString({
                    colors: gutil.colors.supportsColor,
                    hash: false,
                    timings: false,
                    chucks: false,
                    chuckMoudules: false,
                    modules: false,
                    children: false,
                    version: false,
                    cached: false,
                    cachedAssets: false,
                    source: false,
                    errorDetails: false
                }))
            }
            resolve();
        });
    });
});

gulp.task('jsmin', async() => {
    await gulp.src(['dist/webfont.js']) //多个文件以数组形式传入
    .pipe(uglify())
    .pipe(rename("webfont.min.js"))
    .pipe(gulp.dest('dist'));
});
gulp.task("build", gulp.series('webpack','jsmin'));
gulp.task('default', gulp.series('reversion','build','browser-sync'));