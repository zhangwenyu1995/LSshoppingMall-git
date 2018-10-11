define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	function main(){
		$(function(){
			$.ajax({
				url: 'data/data.json',
				type: "GET",
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<li class = 'goods_item'>
				<div class = 'goods_pic'>
					<img src="${res[i].img}" alt="">
				</div>
				<div class = 'goods_title'>
					<p>【京东超市】奥利奥小饼干</p>
				</div>
				<div class = "sc">
					<div id = '${res[i].id}' class = "sc_btn">加入购物车</div>
				</div>
			</li>`;
					}
					$(".goods_box ul").html(html);
					
				},
				error: function(msg){
					alert(msg);
				}
			})

			//事件委托，给异步加载的控件添加事件
			$(".goods_box").on("click", ".sc_btn", function(){

				ballMove(this);

				var id = this.id;
				//加入购物车 约定 goods=[{id:1,num:2},{id:2,num:1}]
				//1、判断是否是第一次添加
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加，直接将cookie存储进去
					$.cookie("goods", `[{id:${id},num:1}]`, {
						expires: 7,
						raw: true
					});
				}else{
					//2、判断之前是否添加过商品
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
					var same = false; //假设没有添加过
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == id){
							//3、之前存储过数量+1
							arr[i].num++;
							same = true;
							break;
						}
					}
					if(!same){
						//4、没有相同的
						var obj = {id: id, num: 1};
						arr.push(obj);
					}
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7,
						raw: true
					});
				}
				sc_car();
			})
			//加载已经加入购物车的商品

			function sc_msg(){
				$.ajax({
					url: "data/data.json",
					type: "get",
					success: function(res){
						var sc_arr = eval($.cookie("goods"));

						var html = '';
						if(sc_arr){
							for(var i = 0; i < sc_arr.length; i++){
								html += `<li>
					<div class = 'sc_goodsPic'>
						<img src="${res[sc_arr[i].id].img}" alt="">
					</div>
					<div class = 'sc_goodsTitle'>
						<p>这是商品奥利奥</p>
					</div>
					<div class = 'sc_goodsBtn'>购买</div>
					<div class = 'sc_goodsNum'>商品数量:${sc_arr[i].num}</div>
				</li>`;
							}
							$(".sc_right ul").html(html);
						}

					}
				})
			}

			//购物车内商品数量
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_arr = eval(sc_str);
					var sum = 0;
					for(var i = 0; i < sc_arr.length; i++){
						sum += sc_arr[i].num;
					}
					$(".sc_num").html(sum);

				}
			}

			/*
				右侧购物车添加移入移出
				mouseenter  移入  JQ独有
				mouseleave  移出
			*/
			$(".sc_right").mouseenter(function(){
				$(this).stop().animate({
					right: 0
				})
				//加载已经加入购物车的数据
				sc_msg();

			});

			$(".sc_right").mouseleave(function(){
				$(this).stop().animate({
					right: -270
				})
			});

			//抛物线运动
			function ballMove(sc_Btn){
				//1、显示小球，移动到按钮位置
				$("#ball").css({
					display: "block",
					left: $(sc_Btn).offset().left,
					top: $(sc_Btn).offset().top
				})

				var offX = $(".sc_pic").offset().left - $("#ball").offset().left;
				var offY = $(".sc_pic").offset().top - $("#ball").offset().top;

				//做抛物线运动
				//1、抛物线对象 设置参数
				var bool = new Parabola({
					el: "#ball",
					targetEl: null,
					offset: [offX, offY],
					curvature: 0.0005,
					duration: 400,
					callback: function(){
						$("#ball").hide();
					}
				})

				//2、开始运动
				bool.start();
			}
		})
	}	
	return {
		main: main
	}
})