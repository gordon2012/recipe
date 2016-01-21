'use strict';

var gulp = require('gulp');

var concat = require('gulp-concat');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var lint = require('gulp-eslint');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var merge = require('merge-stream');

var config =
{
	port: 9001,
	devBaseUrl: 'http://localhost',
	paths:
	{
		html: './src/*.html',
		js: './src/**/*.js',
		css:
		[
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
		sass: './src/*.scss',
		dist: './dist',
		mainJs: './src/main.js',
		build: './build'
	}
};


// Default
gulp.task('default', ['lint', 'html', 'js', 'css', 'open', 'watch']);
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

// JS
gulp.task('js', function()
{
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});


// CSS (Compile SaSS)
gulp.task('css', function()
{

	merge
	(
		gulp.src(config.paths.sass)
			.pipe(sass().on('error', sass.logError)),
		gulp.src(config.paths.css)
	)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
		
});


// Watch task
gulp.task('watch', function()
{
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	gulp.watch(config.paths.sass, ['css']);
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
