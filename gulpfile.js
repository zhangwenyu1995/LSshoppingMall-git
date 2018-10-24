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
// 添加register.scss任务
gulp.task("scss",function(){
	return gulp.src("stylesheet/register.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("register.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//添加login.scss任务
gulp.task("scss",function(){
	return gulp.src("stylesheet/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//添加goods.scss任务
gulp.task("scss",function(){
	return gulp.src("stylesheet/goods.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("goods.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//添加inform.scss任务
gulp.task("scss",function(){
	return gulp.src("stylesheet/inform.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("inform.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//添加shopCar.scss任务
gulp.task("scss",function(){
	return gulp.src("stylesheet/shopCar.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("shopCar.min.css"))
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
	拷贝php
*/
gulp.task("php",function(){
	return gulp.src("php/**/*")
	.pipe(gulp.dest("dist/php"))
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
gulp.task("iconfont1",function(){
	return gulp.src("iconfont1/**/*")
	.pipe(gulp.dest("dist/iconfont1"))
	.pipe(connect.reload());
})

/*

	建立工程的任务
 */
gulp.task("bulid",['copy-html',"iconfont","iconfont1",'scss','images','scripts','data','php'],function(){
	console.log("编译成功")
})
/*

	编写监听
 */

gulp.task("watch", function(){
	gulp.watch(["data/**/*"], ['data']);
	gulp.watch(["js/**/*"], ['scripts']);
	gulp.watch(["php/**/*"], ['php']);
	gulp.watch(["stylesheet/index.scss"], ['scss']);
	gulp.watch(['stylesheet/register.scss'], ['scss']);
	gulp.watch(['stylesheet/login.scss'], ['scss']);
	gulp.watch(['stylesheet/goods.scss'], ['scss']);
	gulp.watch(['stylesheet/inform.scss'], ['scss']);
	gulp.watch(['stylesheet/shopCar.scss'], ['scss']);
	gulp.watch(["img/**/*"], ['images']);
	gulp.watch(["*.html"], ['copy-html']);
	gulp.watch(["iconfont/**/*"], ['iconfont']);
	gulp.watch(["iconfont1/**/*"], ['iconfont1']);

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