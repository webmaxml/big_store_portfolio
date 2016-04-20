'use strict';

          var gulp = require('gulp'),
             watch = require('gulp-watch'),
         webserver = require('gulp-webserver'),
      autoprefixer = require('gulp-autoprefixer'),
          cleanCSS = require('gulp-clean-css'),
           compass = require('gulp-compass'),
              jade = require('gulp-jade'),
        sourcemaps = require('gulp-sourcemaps'),
          imagemin = require('gulp-imagemin'),
            rename = require("gulp-rename"),
             jsdoc = require('gulp-jsdoc3'),
        browserify = require('browserify'),
            source = require('vinyl-source-stream');


// watch tasks
gulp.task('watch', function() {
    watch( './src/**/*.scss', function() {
        gulp.start( 'sass' );
    } );
    watch( './src/**/*.jade', function() {
        gulp.start( 'jade' );
    } );
    watch( './src/js/**/*.js', function() {
        gulp.start( 'scripts' );
    } );
});


// sass processing
gulp.task('sass', function () {
    gulp.src('./src/sass/style.scss')
    .pipe(compass({
        css: 'dist/css',
        sass: 'src/sass',
        image: 'dist/img',
        sourcemap: true,
        require: ['susy']
    }))
    .on('error', function(error) {
        console.log(error);
        this.emit('end');
    })  
    .pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
    .pipe( cleanCSS() )
    .pipe( rename({
        suffix: '.min'
    }) )
    .pipe( gulp.dest('./dist/css/') );
});


// jade processing
gulp.task( 'jade', function() {
    gulp.src( './src/pages/*.jade' )
    .pipe( jade({
        pretty: true
    }) )
    .on('error', function(error) {
        console.log(error);
        this.emit('end');
    })
    .pipe( gulp.dest( './dist/' ) );
} );


// scripts processing
gulp.task( 'scripts', function() {
    browserify('./src/js/app.js')
        .bundle()
        .on('error', function(error) {
            console.log(error);
            this.emit('end');
        })
        .pipe( source('app.min.js') )
        .pipe( gulp.dest( './dist/js/' ) );
} );


// images optimizing
gulp.task( 'img', function() {
    gulp.src( './src/img/*' )
        .pipe( imagemin({
            progressive: true
        }) )
        .pipe( gulp.dest( './dist/img/' ) );
} );


// livereload server
gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

// jsdocs
gulp.task('doc', function (cb) {
    var config = require('./jsdoc.json');
    gulp.src(['README.md', './src/js/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});


gulp.task('default', ['webserver', 'watch']);