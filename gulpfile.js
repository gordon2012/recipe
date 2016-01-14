var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var open = require('gulp-open');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var lint = require('gulp-eslint');



// Lint
gulp.task('lint', function()
{
	return gulp.src('./src/**/*.js')
		.pipe(lint())
		.pipe(lint.format());
});



// Compile SaSS
gulp.task('styles', function()
{
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

// Watch task
gulp.task('default', function()
{
	gulp.watch('sass/**/*.scss', ['styles']);
});
