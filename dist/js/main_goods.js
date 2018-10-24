console.log("加载完成main_goods");
/*
	配置路径nn
*/
require.config({
	paths: {
		"jquery-cookie": "jquery.cookie",
		"require":"require.js",
		"jquery": "jquery-1.11.3",
		"parabola": "parabola",		
		"goods":"goods",
		"jquery.citys":"jquery.citys",

	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"],
		"jquery.citys":["jquery"],
		/*
			定义不遵从AMD规范的js文件
		*/
		"parabola": {
			exports: "_"
		}
	}
})
require(["goods"], function(goods ){
	
	goods.goods();
	
})