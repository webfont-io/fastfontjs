const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
   // devtool: "inline-source-map",
    devtool: "source-map",
    entry: "./src/webfont.ts",
    output: {
      filename: "webfont.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          minify(file, sourceMap) {
            // https://github.com/mishoo/UglifyJS2#minify-options
            const uglifyJsOptions = {
              /* your `uglify-js` package options */
            };
            if (sourceMap) {
              uglifyJsOptions.sourceMap = {
                content: sourceMap,
              };
            }
            return require('terser').minify(file, uglifyJsOptions);
          },
        }),
      ],
    }
};

