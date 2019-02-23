var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var config = require("./webpack.config.js");
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch("./src/**/*.*", gulp.series('webpack'));
    gulp.watch('./dist/**/*.js').on('change', browserSync.reload);
});

gulp.task("webpack",function(){
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
        })
    })
});
gulp.task('default', gulp.series('webpack','browser-sync'));