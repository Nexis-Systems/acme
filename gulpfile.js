const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('html', () => {
    return gulp.src(['src/**/*.pug', '!src/**/layout.pug'])
        .pipe(pug())
        .pipe(gulp.dest('dist'))
})

gulp.task('htmlprod', () => {
    return gulp.src(['src/**/*.pug', '!src/**/layout.pug'])
        .pipe(pug())
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'))
})

gulp.task('scripts', () => {
    return gulp.src(
      [
      'src/assets/js/*.js'
      ])
      .pipe(sourcemaps.init())
      .pipe(babel({ presets: ["@babel/preset-env"] }))
      .pipe(uglify())
    //   .pipe(concat('index.js'))
    //   .pipe(rename('index.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/js'))
})


gulp.task('stylesheets', () => {
    return gulp.src(['node_modules/line-awesome/dist/line-awesome/scss/line-awesome.scss', 'node_modules/bulma/bulma.sass', 'src/assets/scss/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on( 'error', sass.logError ))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // .pipe(concat('index.css'))
        // .pipe(rename('index.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('copyLineAwesome', () => {
    return gulp.src('node_modules/line-awesome/dist/line-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('dev', gulp.parallel('html', gulp.series('copyLineAwesome', 'stylesheets'), 'scripts'))
gulp.task('build', gulp.parallel('htmlprod', gulp.series('copyLineAwesome', 'stylesheets'), 'scripts'))

gulp.task('watch', () => {
    gulp.watch('src/*/**.pug', gulp.series('html'))
    gulp.watch('src/assets/js/*.js', gulp.series('scripts'))
    gulp.watch('src/assets/scss/*.scss', gulp.series('stylesheets'))
})

gulp.task('default', gulp.parallel('dev', 'watch'))