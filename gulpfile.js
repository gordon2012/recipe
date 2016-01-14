var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var open = require('gulp-open');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var lint = require('gulp-eslint');


var config =
{
	port: 9001,
	devBaseUrl: 'http://localhost',
	paths:
	{
		html: './src/*.html',
		js: './src/**/*.js',
		sass: './src/sass/*.scss',

		dist: './dist'
	}
};


// Default
gulp.task('default', ['lint', 'html', 'open', 'watch']);
//gulp.task('default', ['lint', 'html', 'js', 'css', 'open', 'watch']);


// Lint
gulp.task('lint', function()
{
	return gulp.src(config.paths.js)
		.pipe(lint())
		.pipe(lint.format());
});


// Html
gulp.task('html', function()
{
	return gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});


// CSS (Compile SaSS)
gulp.task('styles', function()
{
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});


// Watch task
gulp.task('watch', function()
{
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['lint']);
	// gulp.watch('sass/**/*.scss', ['styles']);
});


// Open browser
gulp.task('open', ['connect'], function()
{
	gulp.src('dist/index.html')
		.pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});


// Connect dev server
gulp.task('connect', function()
{
	connect.server
	({
		root: ['dist'], // TODO(GD): add to config?
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});
