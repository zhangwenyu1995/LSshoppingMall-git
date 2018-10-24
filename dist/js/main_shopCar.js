console.log("main_shopCar.js加载完成");
/*
	配置路径nn
*/
require.config({
	paths: {
		"jquery-cookie": "jquery.cookie",
		"require":"require.js",
		"jquery": "jquery-1.11.3",
			
		"shopCar":"shopCar",
		

	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"],
		
		/*
			定义不遵从AMD规范的js文件
		*/
		"parabola": {
			exports: "_"
		}
	}
})
require(["shopCar"], function(shopCar ){
	
	shopCar.shopCar();
	
})