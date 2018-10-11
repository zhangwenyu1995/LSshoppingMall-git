console.log("数据加载成功");

define(['jquery'],function($){
	function main(){
		//左侧列表数据请求-请求div
			/*var oBtnLis = $("aside").find(".h3-ul").find('li');
			var oBtnDivs = $('aside').find('div');
			oBtnLis.mouseenter(function(){
				oBtnLis.attr('class','');
				oBtnDivs.css('display','none');
				$(this).attr('class','scLeftactive');
				$("aside").find('div').eq($(this).index()).css('display','block');
				oBtnDivs.eq($(this).index()).mouseenter(function(){
						oBtnLis.eq($(this).index() -1).attr('class','scLeftactive');
						$(this).css('display','block');
					});
					oBtnDivs.mouseleave(function(){
						oBtnLis.eq($(this).index() -1).attr('class','');
						$(this).css('display','none');
					});
				})
				oBtnLis.mouseleave(function(){
					oBtnLis.eq($(this).index()).removeClass('scLeftactive');
					oBtnDivs.eq($(this).index()).css('display','none');
				})*/

		}
	
	//ajax请求div中的数据
	$(function(){
		/*$.ajax({
				url: 'data/data1.json',
				type: "GET",
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `
							
					 `;
					}
					$(".h3-div").html(html);
					
				},
				error: function(msg){
					alert(msg);
				}
			})*/
	})

	return {
		main:main
	}
})