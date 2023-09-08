import dartSass from 'sass';
import gulpSass from 'gulp-sass';

import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
// import gulpGgroupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp
        .src(app.path.src.scss, {
            sourcemaps: false,
        })
        .pipe(
            sass({
                outputStyle: 'expanded',
            })
        )
        // .pipe(gulpGgroupCssMediaQueries())
        .pipe(
            app.plugins.if(
                app.modeWebp,
                webpcss({
                    webpClass: '.webp',
                    noWebpClass: '.no-webp',
                })
            )
        )
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: true,
            grid: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
};
