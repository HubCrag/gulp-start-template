import fileinclude from 'gulp-file-include';
import webpHtml from 'gulp-webp-html-nosvg';


export const html = () => {
    return app.gulp
        .src(app.path.src.html)
        .pipe(fileinclude())
        .pipe(
            app.plugins.if(
                app.modeWebp,
                webpHtml()
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};
