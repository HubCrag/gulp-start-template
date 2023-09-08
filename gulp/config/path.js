//get root folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'; //or rootFolder
const srcFolder = './app';

export const path = {
    build: {
        js: buildFolder + '/js/',
        img: buildFolder + '/img/',
        css: buildFolder + '/css/',
        html: buildFolder + '/',
        fonts: buildFolder + '/fonts/',
        files: buildFolder + '/files/',
    },
    src: {
        js: [srcFolder + '/js/*.js', !srcFolder + '/js/_*.js'],
        img: srcFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp,mp4,webm,webmanifest}',
        scss: [srcFolder + '/scss/*.scss', !srcFolder + '/scss/_*.scss'],
        html: [srcFolder + '/*.html', !srcFolder + '/_*.html'],
        fonts: srcFolder + '/fonts/**/*.*',
        files: srcFolder + '/files/**/*.*',
    },
    watch: {
        js: srcFolder+ '/**/*.js',
        img: srcFolder+ '/img/**/*.{jpg,png,svg,gif,ico,webp,mp4,webm,webmanifest}',
        scss: srcFolder+ '/**/*.scss',
        html: srcFolder+ '/**/*.html',
        files: srcFolder+ '/files/**/*.*',
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
};
