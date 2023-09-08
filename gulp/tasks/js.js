import webpack from 'webpack-stream';
import UnminifiedWebpackPlugin from 'unminified-webpack-plugin';

export const js = () => {
    return app.gulp
        .src(app.path.src.js, {
            sourcemaps: false,
        })
        .pipe(
            webpack({
                // mode: 'development',
                mode: 'production',
                optimization: {
                    minimize: true,
                },
                output: {
                    filename: 'script.min.js',
                },
                plugins: [
                    new UnminifiedWebpackPlugin({
                        postfix: ''
                    })
                ]
            })
        )
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};
