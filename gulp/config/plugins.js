import browsersync from "browser-sync";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
    browsersync: browsersync,
    newer: newer,
    if: gulpIf,
}