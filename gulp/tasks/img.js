import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const img = () => {
    return app.gulp
        .src(app.path.src.img)

        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(
            app.plugins.if(
                app.modeWebp,
                webp()
            )
        )
        .pipe(app.gulp.dest(app.path.build.img))


        .pipe(app.gulp.src(app.path.src.img))
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3, //0 to 7
            })
        )
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browsersync.stream());
};
