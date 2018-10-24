console.log("数据加载成功");

define(['jquery'],function($){
	function main(){
		$(function(){
//一.首页..

	//1.head的效果有问题
			//div1
			$('.hidden1').on('mouseenter','.h1>.li1',function(){
				$(".hidden1 .h2").css("display",'block')
				
			})
			$('.hidden1').on('mouseleave','.h1>.li1',function(){
				$(".hidden1 .h2").css("display","none")
			})
			//div2
			$('.hidden1').on('mouseenter','.h1>.li2',function(){
				$(".hidden1 .h3").css("display",'block')
				
			})
			$('.hidden1').on('mouseleave','.h1>.li2',function(){
				$(".hidden1 .h3").css("display","none")
			})
			//div3
			$('.hidden1').on('mouseenter','.h1>.li3',function(){
				$(".hidden1 .h4").css("display",'block')
				
			})
			$('.hidden1').on('mouseleave','.h1>.li3',function(){
				$(".hidden1 .h4").css("display","none")
			})


	//2.轮播图	
			var oBtns = $(".hidden3 ").find("aside").find("section").find("ol").find("li");
			var oUl = $(".hidden3 ").find("aside").find("section").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0; //记录当前是第几张
			var timer = null; //设计记录定时器的标识

			function Interval(){
				timer = setInterval(timerInner, 4000);
			}
			Interval();
			function timerInner(){
				iNow++;
				tab();
			}

			function tab(){
				//document.title = iNow;
				if(iNow == oBtns.size()){
					oBtns.attr("class", "");
					oBtns.eq(0).attr("class", "active");
				}else{
					oBtns.attr("class", "");
					oBtns.eq(iNow).attr("class", "active");
				}
				
				oUl.stop().animate({left: iNow * -1200}, function(){
					if(iNow == oBtns.size()){
						iNow = 0;
						oUl.css("left", "0px");
					}
				});
			}

			var timeout = null;
			oBtns.click(function(){
				iNow = $(this).index();
				tab();
				clearInterval(timer);
				clearTimeout(timeout);
				timeout = setTimeout(Interval, 4000);

			})

			$('.hidden3 aside section .h3-LB-l').click(function(){
				if(iNow == 0){
					oUl.css("left", (oBtns.size() * -1200) + "px");
					iNow = (oBtns.size() - 1);
				}else{
					iNow--;
				}
				
				tab();
				clearInterval(timer);
				clearTimeout(timeout);
				timeout = setTimeout(Interval, 4000);
			});
			$('.hidden3 aside section .h3-LB-r').click(function(){
				if(iNow == oBtns.size()){
					iNow = 0;
				}else{
					iNow++;
				}
				
				tab();
				clearInterval(timer);
				clearTimeout(timeout);
				timeout = setTimeout(Interval, 4000);
			});
			/*$('.hidden3 aside section .h3-LB').mouseenter(function(){
				$('.hidden3 aside section .h3-LB-r').add('.hidden3 aside section .h3-LB-l').css("display",'block')
			});
			$('.hidden3 aside section .h3-LB').mouseleave(function(){
				$('.hidden3 aside section .h3-LB-r').add('.hidden3 aside section .h3-LB-l').css("display",'none')
			})*/

			//轮播图的ajax请求
			$.ajax({
				url: 'data/data.json',
				type: "GET",
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						$(` <li><img src="${res[i].img}" alt=""></li>`)
						.appendTo(".hidden3 aside section .h3-LB")
					}
							
				},
				error: function(msg){
					alert(msg);
				}
			})


	//3.左侧列表
			var oLis = $("aside").find(".h3-ul").find('li');
			var oDivs = $('aside').find('.h3-div');
			$('aside').on('mouseenter','.h3-ul>li',function(){
				oDivs.css('display','none').eq($(this).index()).css('display','block');
				oLis.removeClass('scLeftactive').eq($(this).index()).addClass('scLeftactive');	
			})
			$('aside').on('mouseleave',function(){
				oDivs.css('display','none');
				oLis.removeClass('scLeftactive');
			})

			$.ajax({
					url: 'data/c.json',
					type: "GET",
					success: function(res){
						// alert(res);
						//将数据通过循环遍历，添加到页面上
						var html = "";
						var header = res.head;
						var informs = header.inform;
			//3.左侧列表的ajax请求
						for(var i = 0; i < header.length; i++){
							html += `
							<li><a href="inform.html"><p><i style = 'margin-right:100px ;
							font-size:13px;font-weight:600'>
							${header[i].leftside}</i><span>></span></p></a></li>
						 	
						 `;
						 
						}
						$(".h3-ul").html(html);
						//第一个div
						for(var j = 0; j <header[0].inform.length; j++){
							$(`<li><a href=""><img src="${header[0].inform[j].img}" alt="">
								<span>${header[0].inform[j].title}</span></a></li>`).appendTo('.h3-div-ul1')
						}
						
						//$(`a href=""><img src="${header[1].right}" alt=""></a>`).appendTo('.h3-div-ul-r')
						//第二个div
						for(var k = 0; k <header[1].inform.length; k++){
							$(`<li><i><a href="">${header[1].inform[k].title}</a></i>
								<span>${header[1].inform[k].smalltitle}</span></li>`).appendTo('.h3-div-ul2')
						}
						//第三个div
						for(var k = 0; k <header[2].inform.length; k++){
							$(`<li><a href="">${header[2].inform[k].title}</a></li>`).appendTo('.h3-div-ul3')
						}

						//第四个div
						for(var k = 0; k <header[3].inform.length; k++){
							$(`<li><a href="">${header[3].inform[k].title}</a></li>`).appendTo('.h3-div-ul4')
						}

			//4.商城公告的ajax
						var adver = res.body_adver;
						for(var i = 0; i<adver.length;i++){
			
							$(`<li><img src="${adver[i].img}" alt=""></li>`).appendTo('.hidden4 article .h4-ul2')
						}
			//4.商城公告的js
						var h4UImgs = $('.hidden4 article .h4-ul2 ').find("li").find('img');

						h4UImgs.hover(function(){
							
							$(this).css('opacity','0.8')
						},function(){
							$(this).css('opacity','1')
							
						})


			//5.智能大屏的ajax请求
						var screen = res.body_screen;
						var Ul = $('.hidden6').find('.screen').find("ul");
						var html = `<li class = "s-li1"><a href=""><img src="./images/screen/s-1.jpg" alt=""></a></li>`;	
						for(var i = 0; i<screen.length;i++){
							html+=`<li>
								<a href="">
									<img class = "s-img" src="${screen[i].simg}" alt=""> 
									
									<img class = "s-img1" src="${screen[i].simg1}" alt="">
									<div>
										<span>${screen[i].title} </span>
										<h1>${screen[i].mtitle}</h1>
										<i> ${screen[i].btitle} </i>
									</div>
								</a>
							</li>`;
						}
						$(".hidden6 .screen ul").html(html)

			//5.智能大屏
					var h6Ulis = $('.hidden6 .screen ul').find("li");
					h6Ulis.hover(function(){
						
						$('.hidden6 .screen ul li ').eq($(this).index()).find('a i').css("color","red");
						$('.hidden6 .screen ul li ').eq($(this).index()).find('a span').css("color","red");
						$('.hidden6 .screen ul li ').eq($(this).index()).find('a .s-img').stop().animate({width: 220,height:220}, 1000);

					},function(){
						$('.hidden6 .screen ul li ').eq($(this).index()).find('a i').css("color","black");
						$('.hidden6 .screen ul li ').eq($(this).index()).find('a span').css("color","black");
						$('.hidden6 .screen ul li ').eq($(this).index()).find('a .s-img').stop().animate({width: 200,height:200}, 1000);
					})

			//6.精品配件ajax
					var part1 = res.body_part1;
					for(var i = 0; i<part1.length; i++){
						$(`<li>
								<img src="${part1[i].img}" alt="">
								<h2>${part1[i].title}</h2>
								<span>${part1[i].mtitle}</span>
								<i>${part1[i].stitle}</i>
							</li>`
						).appendTo('.h8-ul1')
							}
					var part2 = res.body_part2;
					for(var i = 0; i<part2.length; i++){
						$(`
							<li>
								<img src="${part2[i].img}" alt="">
								<p>
									<span>${part1[i].title}</span>
									<i>${part2[i].mtitle}</i>
								</p>
							</li>

							`).appendTo('.h8-ul2')
					}
			//6.精品配件js
					var oU8Li1s = $('.hidden8 .parts .h8-ul1').find('li');
					oU8Li1s.hover(function(){
						oU8Li1s.eq($(this).index()).find('h2').css('color','red');
						oU8Li1s.eq($(this).index()).find('i').css('color','red');
						oU8Li1s.eq($(this).index()).find('img').stop().animate({width:210,height:140},2000)
					},function(){
						oU8Li1s.eq($(this).index()).find('h2').css('color','black');
						oU8Li1s.eq($(this).index()).find('i').css('color','black');
						oU8Li1s.eq($(this).index()).find('img').stop().animate({width:190,height:120},2000)
					})

					var oU8Li2s = $('.hidden8 .parts .h8-ul2').find('li');
					oU8Li2s.hover(function(){
						oU8Li2s.eq($(this).index()).find('p span').css('color','red');
						oU8Li2s.eq($(this).index()).find('p i').css('color','red');
						oU8Li2s.eq($(this).index()).find('img').stop().animate({width:130,height:130},2000)
					},function(){
						oU8Li2s.eq($(this).index()).find('p span').css('color','black');
						oU8Li2s.eq($(this).index()).find('p i').css('color','black');
						oU8Li2s.eq($(this).index()).find('img').stop().animate({width:110,height:110},2000)
					})
					

					},
					error: function(msg){
						alert(msg);
					}
				})

	










		})
	}

	return {
		main:main
	}
})