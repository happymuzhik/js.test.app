const gulp = require('gulp');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer-stylus');
const concat = require('gulp-concat');

const common_dev_css_dir = './native/dev/common/';
const common_css_dir = './native/public/css/';

gulp.task('stylus_common', function () {
	return gulp.src(common_dev_css_dir+'common.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(common_css_dir));
});

gulp.task('common', ['stylus_common'],function() {
	gulp.watch(common_dev_css_dir+'common.styl',['stylus_common']);
});