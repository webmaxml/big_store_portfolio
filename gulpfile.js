'use strict';

          var gulp = require('gulp'),
             watch = require('gulp-watch'),
         webserver = require('gulp-webserver'),
      autoprefixer = require('gulp-autoprefixer'),
          cleanCSS = require('gulp-clean-css'),
           compass = require('gulp-compass'),
              jade = require('gulp-jade'),
 requirejsOptimize = require('gulp-requirejs-optimize'),
        sourcemaps = require('gulp-sourcemaps'),
          imagemin = require('gulp-imagemin'),
            rename = require("gulp-rename");


// watch tasks
gulp.task('watch', function() {
    watch( './src/sass/**/*.scss', function() {
        gulp.start( 'sass' );
    } );
    watch( './src/jade/**/*.jade', function() {
        gulp.start( 'jade' );
    } );
    watch( './src/js/**/*.js', function() {
        gulp.start( 'scripts' );
    } );
    watch( './src/img/*', function() {
        gulp.start( 'img' );
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
    .pipe( rename({
        suffix: '.min'
    }) )
    .pipe( cleanCSS() )
    .pipe( gulp.dest('./dist/css/') );
});


// jade processing
gulp.task( 'jade', function() {
    gulp.src( './src/jade/*.jade' )
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
    gulp.src( './src/js/app.js' )
    .pipe( sourcemaps.init() )
    .pipe( requirejsOptimize({
        include: ['almond', 'app'],
        mainConfigFile: './src/js/config.js'
    }) )
    .on('error', function(error) {
        console.log(error);
        this.emit('end');
    })
    .pipe( rename({
        suffix: '.min'
    }) )
    .pipe( sourcemaps.write() )
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


gulp.task('default', ['webserver', 'watch']);