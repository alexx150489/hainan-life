"use strict";

var gulp = require("gulp");
// var stylus = require("gulp-stylus");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var del = require("del");
var run = require("run-sequence");
var pug = require('gulp-pug');

gulp.task('pug', function() {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(browserSync.reload({stream: true}))
		.pipe(gulp.dest('src'))
});

gulp.task("style", function() {
	return gulp.src("src/css/css3.css")
		.pipe(plumber())
		// .pipe(less())
		.pipe(postcss([
			autoprefixer({browsers: [
				"last 1 version",
				"last 2 Chrome versions",
				"last 2 Firefox versions",
				"last 2 Opera versions",
				"last 2 Edge versions"
			]}),
			mqpacker({
			sort: true
			})
		]))
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.reload({stream: true}))
		// .pipe(minify())
		// .pipe(rename("style.min.css"))
		.pipe(gulp.dest("src/css"));
});

// gulp.task("style", function() {
// 	gulp.src("stylus/style.styl")
// 		.pipe(plumber())
// 		.pipe(stylus())
// 		.pipe(postcss([
// 			autoprefixer({browsers: [
// 				"last 1 version",
// 				"last 2 Chrome versions",
// 				"last 2 Firefox versions",
// 				"last 2 Opera versions",
// 				"last 2 Edge versions"
// 			]}),
// 			mqpacker({
// 			sort: true
// 			})
// 		]))
		
// 		.pipe(gulp.dest("css"))
// 		.pipe(browserSync.reload({stream: true}))
// 		.pipe(minify())
// 		.pipe(rename("style.min.css"))
// 		.pipe(gulp.dest("css"));
// });

gulp.task("images", function() {
	return gulp.src("src/images/**/*.{png,jpg,gif}")
		.pipe(imagemin([
			 imagemin.optipng({optimizationLevel: 3}),
			 imagemin.jpegtran({progressive: true})
	]))
	.pipe(gulp.dest("src/images/min"));
});

gulp.task("symbols", function() {
	return gulp.src("build/img/icons/*.svg")
		.pipe(svgmin())
		.pipe(svgstore({
			inlineSvg: true
		}))
	.pipe(rename("symbols.svg"))
	.pipe(gulp.dest("build/img"));
});

gulp.task("copy", function() {
	return gulp.src([
		"fonts/**/*.{woff,woff2}",
		"img/**",
		"js/**",
		"*.html"
	], {
		base: "."
	})
	.pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
	return del("build");
});

gulp.task("build", function(fn) {
	run(
		"clean",
		"copy",
		"style",
		"images",
		"symbols",
		fn
	);
});

gulp.task("serve", ["style"], function() {
	browserSync ({
		server: {
			baseDir: ["./src"]
		},
		port: 8080,
		open: true,
		notify: false
	});

	// gulp.watch("stylus/**/*.styl", ["style"]);
	gulp.watch("src/css/**/*.css", ["style"]);
	gulp.watch("src/**/*.html").on("change", browserSync.reload);
	gulp.watch("src/pug/**/*.pug", ["pug"]);
});


gulp.task("svgsprite", function() {
	return gulp.src("img/svg-sprite*.svg")
		.pipe(svgmin())
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("symbols.svg"))
		.pipe(gulp.dest("img/svg-sprite"));
});
