var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var nodemon = require('gulp-nodemon');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('start', function() {
	nodemon({
		script: 'app.js',
		ext: 'js html',
		env: { 'NODE_ENV': process.env.NODE_ENV || 'development' }
	});
});

gulp.task('default', ['start']);