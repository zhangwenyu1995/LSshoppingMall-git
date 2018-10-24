console.log('inform.js加载成功')
define(['jquery','jquery-cookie'],function($){
	function inform(){
		$(function(){
		

	//ajax
		$.ajax({
			url: 'data/inform.json',
			type: "GET",
			success:function(res){



	//1.h11-B1的ajax
				var inform1 = res.inform1;
				for(var i = 0; i < inform1.length; i++){

					$(
						`<ul>
							<img class = 'img1' src="${inform1[i].img1}" alt="">
							<img class= "img2" src="${inform1[i].img2}" alt="">
							<li>${inform1[i].title}</li>
							<div class = 'iconfont'>
								<p>${inform1[i].price}</p>
								<p><i>&#xe642;&#xe642;&#xe642;&#xe642;&#xe642;</i><em>${inform1[i].evaluate}</em></p>
							</div>
							<p class = "btn"  id = "${inform1[i].id}" ><a  href="">${inform1[i].buy}</a></p>
						</ul>`
				).appendTo('.h11-B1')
				}

	//2.h11-B2的ajax
				var inform2 = res.inform2;
				for(var i = 0; i < inform2.length; i++){
					$(
						`<ul>
							<img class = 'img1' src="${inform2[i].img1}" alt="">
							<img class= "img2" src="${inform2[i].img2}" alt="">
							<li>${inform2[i].title}</li>
							<div class = 'iconfont'>
								<p>${inform2[i].price}</p>
								<p><i>&#xe642;&#xe642;&#xe642;&#xe642;&#xe642;</i><em>${inform2[i].evaluate}</em></p>
							</div>
							<p><a href="">${inform2[i].buy}</a></p>
						</ul>`
				).appendTo('.h11-B2')
				}

	//3.h11-B3的ajax
				var inform3 = res.inform3;
				for(var i = 0; i < inform3.length; i++){
					$(
						`<ul>
							<img class = 'img1' src="${inform3[i].img1}" alt="">
							<img class= "img2" src="${inform3[i].img2}" alt="">
							<li>${inform3[i].title}</li>
							<div class = 'iconfont'>
								<p>${inform3[i].price}</p>
								<p><i>&#xe642;&#xe642;&#xe642;&#xe642;&#xe642;</i><em>${inform3[i].evaluate}</em></p>
							</div>
							<p><a href="">${inform3[i].buy}</a></p>
						</ul>`
				).appendTo('.h11-B3')
				}










	//1.h11-B1
			$('.h11-B1>ul').hover(function(){
						
				$('.h11-B1>ul').eq($(this).index()).css('border','1px solid red');
				$('.h11-B1>ul>p').eq($(this).index()).css('background','red');
				$('.h11-B1>ul>p>a').eq($(this).index()).css('color','white');
			},function(){
				$('.h11-B1>ul').eq($(this).index()).css('border','1px solid #f5f5f5');
				$('.h11-B1>ul>p').eq($(this).index()).css('background','white');
				$('.h11-B1>ul>p>a').eq($(this).index()).css('color','red');
			})
	//2.h11-B2
			$('.h11-B2>ul').hover(function(){

				$('.h11-B2>ul').eq($(this).index()).css('border','1px solid red');
				$('.h11-B2>ul>p').eq($(this).index()).css('background','red');
				$('.h11-B2>ul>p>a').eq($(this).index()).css('color','white');
			},function(){
				$('.h11-B2>ul').eq($(this).index()).css('border','1px solid #f5f5f5');
				$('.h11-B2>ul>p').eq($(this).index()).css('background','white');
				$('.h11-B2>ul>p>a').eq($(this).index()).css('color','red');
			})
	//3.h11-B3
			$('.h11-B3>ul').hover(function(){

				$('.h11-B3>ul').eq($(this).index()).css('border','1px solid red');
				$('.h11-B3>ul>p').eq($(this).index()).css('background','red');
				$('.h11-B3>ul>p>a').eq($(this).index()).css('color','white');
			},function(){
				$('.h11-B3>ul').eq($(this).index()).css('border','1px solid #f5f5f5');
				$('.h11-B3>ul>p').eq($(this).index()).css('background','white');
				$('.h11-B3>ul>p>a').eq($(this).index()).css('color','red');
			})






			
	//4.cookie的添加
	//事件委托
		$(".h11-B1").on("click", ".btn", function(){
			alert(this.id)
			//获取到当前加入购物车按钮所在的商品id
			var id = this.id;
			//存储cookie的时候，对于当前商品只存储两个值，id num
			//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
			//
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				alert(99)
				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7});
				}
			}
			
			alert($.cookie('goods'));
		})


		




































			},
			error: function(msg){
					alert(msg);
				}
		})






		})
	}
	return{
		inform:inform
	}
})
