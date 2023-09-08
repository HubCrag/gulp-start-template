import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

const modeWebp = true;

global.app = {
    gulp: gulp,
    path: path,
    plugins: plugins,
    modeWebp: modeWebp,
};

import { fonts } from './gulp/tasks/fonts.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { server } from './gulp/tasks/server.js';

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);
}

const mainTasks = gulp.parallel(html, scss, js, img);

gulp.task(
    'default',
    gulp.series(reset, fonts, mainTasks, gulp.parallel(watcher, server))
);
