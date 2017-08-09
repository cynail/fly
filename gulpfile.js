


//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}
//
////gulp插件的使用
//var gulp = require("gulp");
//var htmlmin = require("gulp-htmlmin"); //引入插件gulp-htmlmin
//
////任务htmlTask
//gulp.task("htmlTask", function(){
//	
//	gulp.src("src/html/05_dafeiji.html")
//		.pipe( htmlmin(obj) ) //使用插件压缩html
//		.pipe( gulp.dest("dest/html") );
//	
//});
//gulp.task("default", ["htmlTask"]);
//压缩js
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件

//压缩js
gulp.task('jsTask', function(){
	gulp.src('src/js/bullet.js')
//	.pipe(bom()) 
	.pipe(babel({presets:["es2015"]}))
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']);

//var gulp = require('gulp');
//var minifyCss = require('gulp-minify-css'); 
//gulp.task('cssTask', function(){
//	gulp.src('src/css/plane.css')
//	.pipe(minifyCss())
//	.pipe(gulp.dest('dest/css'));
//});
//gulp.task('default', ['cssTask']);





