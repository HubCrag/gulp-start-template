import svgSprite from 'gulp-svg-sprite';

export const svg = () => {
    return app.gulp
        .src(app.path.src.svg)
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }))
        .pipe(app.gulp.dest(app.path.build.svg))
        .pipe(app.plugins.browsersync.stream());
};
