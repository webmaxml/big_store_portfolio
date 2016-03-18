'use strict';

          var gulp = require('gulp'),
             watch = require('gulp-watch'),
         webserver = require('gulp-webserver'),
      autoprefixer = require('gulp-autoprefixer'),
          cleanCSS = require('gulp-clean-css'),
           compass = require('gulp-compass'),
              jade = require('gulp-jade'),
 requirejsOptimize = require('gulp-requirejs-optimize'),
        sourcemaps = require('gulp-sourcemaps');


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
});

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
    .pipe( gulp.dest('./dist/css/') );
});

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
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( './dist/js/' ) );
} );

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['webserver', 'watch']);