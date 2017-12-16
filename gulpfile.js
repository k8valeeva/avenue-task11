var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify');

gulp.task('minify', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('imgmin', () =>
gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);

gulp.task('sass', function () {
    return gulp.src('src/styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: '>5%'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles/css'))
});

gulp.task('js', function () {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        './node_modules/masonry-layout/dist/masonry.pkgd.min.js',
        './src/js/main.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['minify', 'imagemin', 'sass', 'js'], function() {});
