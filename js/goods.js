console.log("成功加载goods.js");
define(['jquery','jquery.citys'],function($){
	function goods(){

	//1.商品-小轮播图的滚动
		/*var oUl = $('.h11-D1 .h11-d2 .h11-d2-LB ').find('ul');
		var oLis = oUl.find('li');
		var iNow = 0;
		var _iNow = 0;
		$('#btn1').click(function(){
				iNow++;
				oUl.stop().animate({left: -78 * iNow});
				var _iNow = iNow;
				alert(1)
		});

		$('#btn2').click(function(){
				_iNow++
		oUl.stop().animate({left: 78 * (_iNow-1)});
			
				//alert(1);
		})*/
	



	//3.放大镜效果：
	 $('.h11-D1').on('mouseenter','#small>img',function(e){
				$('#small .mark').css('display','block');
				$('.div').css('display','block');
				//移动大图标，对应显示maximg
				//alert($(this).index())
				$('.div img').css('display','none').eq($(this).index()).css('display','block');
				$('#small').on('mousemove',function(e){
					var sleft = e.pageX-$('#small').offset().left - ($('#small .mark').width ()) / 2;
					var stop = e.pageY - $('#small').offset().top - ($(' #small .mark').height()) / 2;
					if(sleft < 0){
						sleft = 0;
					}else if(sleft > $('#small').width() - $(' #small .mark').width()){
						sleft = $('#small').width() - $('#small .mark').width();
					};
					if(stop<0){
						stop = 0;
					}else if(stop > $('#small').height() - $('#small .mark').height()){
						stop = $('#small').height() - $('#small .mark').height();
					}
					$('#small .mark').css('left',sleft + 'px');
					$('#small .mark').css('top',stop + 'px');
					var bX = $('#small').width() / ($('#small').width() - $('#small .mark').width());
					var bY = $('#small').height() / ($('#small').height() - $('#small .mark').height());
					$('.div img').css('left', (-sleft * bX) + 'px');
					$('.div img').css('top', (-stop * bY) + 'px');
				});
				$('#small').on('mouseleave',function(e){
					$('#small .mark').css('display','none');
					$('.div').css('display','none');
				})
			});

	 //4.顶部滚动效果
	 	var hidden12_height = $('.hidden12').offset().top;
	 	$(window).scroll(function(){
	 		var this_scrollTop = $(this).scrollTop();
	 		if( this_scrollTop > hidden12_height){
	 			$('#fixed3').show();
	 		}else{
	 			$('#fixed3').hide();
	 		}
	 	})
	




//ajax数据的请求：
	$.ajax({
		url: 'data/goods.json',
		type: "GET",
		success:function(res){
	//1.放大镜的 small的ajax请求
			var html = '';
			var goods = res.goods_small;
			for(var i = 0; i <goods.length; i++){
				html += `<img src="${goods[i]}" alt="">`;
			}
			$(".h11-D1>#small").html(html);


	//2.商品详情的事件委托
			var oLis = $('.h11-D1 .h11-d2 .h11-d2-LB ul').find('li');
			var oDivs = $('.h11-D1').find('#small').find('img');
			$('.h11-D1 ').on('mouseenter','.h11-d2-LB>ul>li',function(){
				oDivs.css('display','none').eq($(this).index()).css('display','block');
				oLis.eq($(this).index()).css('border','1px solid red');
			})
			$('.h11-D1 ').on('mouseleave','.h11-d2-LB>ul>li',function(){
				oLis.eq($(this).index()).css('border','1px solid #eeedeb');
			})

	//1.放大镜的 big的ajax请求
			var bigs = res.goods_big;
			for(var i = 0; i <bigs.length; i++){
				html += `<img src="${bigs[i]}" alt="">`;
			}
			$(".div").html(html);

	//2.右侧商品详情的ajax：
			var g_inform = res.goods_informs;
			$(`
				<div class = 'gray'>
							<p>${g_inform[0]}</p>
							<i>${g_inform[1]}</i>
						</div>
						<div id = "address">
							<p>${g_inform[2]}</p>
							<i class = "h11-d3-i" >${g_inform[3]} <a href="" >></a></i>
							<span class = "h11-d3-i" >${g_inform[4]}</span>

						</div> 
						<div>
							<p>${g_inform[5]}</p>
							<em class = "h11-d3-em1">${g_inform[6]}</em>
						</div> 
						<div>
							<p>${g_inform[7]}</p>
							<em class = "h11-d3-em1">${g_inform[8]}</em>
						</div> 
						<div>
							<p>${g_inform[9]}</p>
							<em class = "h11-d3-em2">${g_inform[10]} 
							<a href="">0元>${g_inform[11]}</a></em>
						</div> 
						<div class = 'gray'>
							<p>${g_inform[12]}</p>
							<i>${g_inform[13]}</i>
							<a class = 'shopcar' href="">${g_inform[14]}</a>
						</div>
						<aside >
							<div class="main">
								<div id="demo2" class="citys">
									<p>
										<select name="province"></select>
										<select name="city"></select>
										<select name="area"></select>
									</p>
									<p id="place">${g_inform[15]}</p>
								</div>
							
							</div>
													
						</aside>

				`).appendTo('.h11-D2 .h11-d3 section')

	


	//3.点击address按钮
		$('.h11-D2 .h11-d3 section').on('mouseenter',"#address",function(){
			$('.h11-D2 .h11-d3 section aside ').css("display",'block')
		})
		$('.h11-D2>.h11-d3>section>aside').on('mouseleave',function(){
			$('.h11-D2 .h11-d3 section aside ').css("display",'none')
		})

	 //3.地址
		$('#demo2').citys({
			required:false,
			nodata:'disabled',
			onChange:function(data){
				var text = data['direct']?'(直辖市)':'';
				$('#place').text('当前选中地区：'+data['province']+text+' '+data['city']+' '+data['area']);
			}
		});





	






		},
		error: function(msg){
						alert(msg);
					}
	})


	}
	return{
		goods:goods
	}
})











