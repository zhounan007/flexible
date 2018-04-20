var gulp = require('gulp');
var uglify = require('gulp-uglify');  // 压缩
var rename = require('gulp-rename');  // 重命名
var jshint = require('gulp-jshint');  // 注意需要同时安装 jshint

gulp.task('build', function() {

	gulp.src('./libs/zui.flexible.js')
		 //.pipe(jshint())
    	 //.pipe(jshint.reporter('default'))
    	 .pipe(uglify())
    	 .pipe(rename({suffix: '.min'}))
    	 .pipe(gulp.dest('./dist/'));

});