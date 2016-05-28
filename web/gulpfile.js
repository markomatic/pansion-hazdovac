'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const runSequence = require('run-sequence');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const argv = require('minimist')(process.argv.slice(2));

const RELEASE = !!argv.release;

const AUTOPREFIXER_BROWSERS = [ // https://github.com/ai/browserslist
    'Explorer >= 10',
    'ExplorerMobile >= 10',
    'Firefox >= 30',
    'Chrome >= 34',
    'Safari >= 7',
    'Opera >= 23',
    'iOS >= 7',
    'Android >= 4.4'
];

let src = {};
let watch = false;

// Clean output directory
gulp.task('clean', del.bind(
    null, ['build/*'], { dot: true }
));

// Fonts
gulp.task('fonts', () =>
    gulp.src('src/fonts/**')
        .pipe(gulp.dest('build/fonts'))
);

// Static files
gulp.task('assets', () => {
    src.assets = [
        'src/assets/**'
    ];

    return gulp.src(src.assets)
        .pipe($.changed('build/assets'))
        .pipe(gulp.dest('build/assets'))
        .pipe($.size({title: 'assets'}));
});

// CSS style sheets
gulp.task('styles', () => {
    src.styles = [
        'src/**/*.{css,scss}'
    ];

    return gulp.src('src/styles/ui.scss')
        .pipe($.plumber())
        .pipe($.sassGlob())
        .pipe($.sass())
        .on('error', console.error.bind(console))
        .pipe($.postcss([autoprefixer({browsers: AUTOPREFIXER_BROWSERS})]))
        .pipe($.csscomb())
        .pipe($.if(RELEASE, $.cleanCss()))
        .pipe(gulp.dest('build/styles'))
        .pipe($.size({title: 'styles'}));
});

// Bundle
gulp.task('bundle', cb => {
    let started = false;
    let config = require('./webpack.config.js');
    let bundler = webpack(config);

    function bundle(err, stats) {
        if (err) {
            throw new $.util.PluginError('webpack', err);
        }

        if (argv.verbose) {
            $.util.log('[webpack]', stats.toString({colors: true}));
        }

        if (!started) {
            started = true;
            return cb();
        }
    }

    if (watch) {
        bundler.watch(200, bundle);
    } else {
        bundler.run(bundle);
    }
});

// Build the app from source code
gulp.task('build', ['clean'], cb => {
    runSequence(['fonts', 'assets', 'styles', 'bundle'], cb);
});

// Build and start watching for modifications
gulp.task('build:watch', cb => {
    watch = true;
    runSequence('build', () => {
        gulp.watch(src.assets, ['assets']);
        gulp.watch(src.styles, ['styles']);
        cb();
    });
});

gulp.task('default', ['build:watch']);
