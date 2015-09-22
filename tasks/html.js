'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var config = require('./../config');

var embedlr = require("gulp-embedlr");

module.exports = function() {
  gutil.log(gutil.colors.yellow('htmlifying...'));
  return gulp.src(config.html.all)
    .pipe(watch(config.html.all))
    .pipe(embedlr())
    .pipe(gulp.dest(config.html.output))
    .pipe(refresh(lrserver));
};
