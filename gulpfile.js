const gulp = require("gulp")
/*
拷贝html文件
 */
gulp.task("copy-html",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());

})

/*
	拷贝图片
 */
gulp.task("images",function(){
	return gulp.src("img/**/*")
	.pipe(gulp.dest("dist/images"));
})
/*
	使用gulp-sass-china 编译scss文件
	gulp-minify-css
	gulp-rename
 */
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss",function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

/*
	拷贝js文件
 */
gulp.task("scripts",function(){
	return gulp.src(["js/**/*"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
/*
	拷贝数据
 */
gulp.task("data",function(){
	return gulp.src("data/**/*")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

/*
	拷贝iconfont
*/
gulp.task("iconfont",function(){
	return gulp.src("iconfont/**/*")
	.pipe(gulp.dest("dist/iconfont"))
	.pipe(connect.reload());
})


/*

	建立工程的任务
 */
gulp.task("bulid",['copy-html',"iconfont",'scss','images','scripts','data'],function(){
	console.log("编译成功")
})
/*

	编写监听
 */

gulp.task("watch", function(){
	gulp.watch(["data/**/*"], ['data']);
	gulp.watch(["js/**/*"], ['scripts']);
	gulp.watch(['stylesheet/index.scss'], ['scss']);
	gulp.watch(["img/**/*"], ['images']);
	gulp.watch(["*.html"], ['copy-html']);

})

/*
	启动服务器

 */
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:'dist',
		port:8888,
		livereload:true
	})
})

//启动默认任务
gulp.task("default",['watch','server'])