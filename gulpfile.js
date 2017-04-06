var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
 	cleanCSS = require('gulp-clean-css'),
 	htmlmin = require('gulp-htmlmin'),
 	minImg = require('gulp-imagemin'),
 	server = require('gulp-server-livereload'),
 	concat = require('gulp-concat');

gulp.task('startServer', function(){
	gulp.src('./')
		.pipe(server({
			livereload: true,
      		directoryListing: true,
      		open: true
		}));
});

gulp.task('minCSS', function(){
		return gulp.src("css/*.css")
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: true,
				add: true,
				remove: true,

		}))
		.pipe(concat('all.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('build/css'));
});

gulp.task('minhtml', function(){
	return gulp.src('index.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			useShortDoctype: true,
			removeRedundantAttributes: true,
			removeComments: true,
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('imgmin', function(){
	return gulp.src('images/*')
		.pipe(minImg())
		.pipe(gulp.dest('build/images'));
});

gulp.task('minjs', function(){
	return gulp.src('js/*.js')

		// SEE ABOUT MINIFYING OR COMPILING JQUERY...

		.pipe(gulp.dest('build/js'));
});

gulp.task('default', ['minCSS', 'minhtml', 'imgmin', 'minjs'], function(){
	// ...
});