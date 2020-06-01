const { watch, series, src, dest } = require( 'gulp' );

const minify = require( 'gulp-minify' );
const concat = require('gulp-concat');
const babel = require('gulp-babel');

var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');

function minifyEachJS() {
  return src( 'src/js/*.js' )
  .pipe( minify() )
  .pipe( babel() )
  .pipe( dest( 'js' ) );
}

function concatAllSCSS(){
  return src( 'src/scss/stylesheets.scss' )
  .pipe( sass() )
  .pipe( concat( 'stylesheets.css' ) )
  .pipe( dest( 'css/' ) )
  .pipe( cssnano() )
  .pipe( concat( 'stylesheets.min.css' ) )
  .pipe( dest( 'css/' ) );
}

function concatAllJS() {
  return src( 'src/js/*.js' )
  .pipe( babel() )
  .pipe(concat('javascript.js'))
  .pipe( minify() )
  .pipe( dest( 'js' ) )
}

function watchAll(){
  watch( 'src/js/*.js', series( 
    concatAllJS
  ) );

  watch( 'src/scss/*.scss', series( 
    concatAllSCSS
  ) );

}

exports.default = function(){
  watchAll();
}