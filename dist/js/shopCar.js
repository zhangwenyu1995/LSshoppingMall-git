console.log("shopCar.js成功加载");

define(['jquery','jquery-cookie'],function($){
	function shopCar(){
		//显示购物车内商品
		
			$.ajax({
				url: 'data/inform.json',
				success: function(arr){
					var arr = arr.inform1;
					$(".box").html("");
					//在所有商品信息里面找出，加入购物车的商品信息
					var cookie_arr = eval($.cookie('goods'));

					for(var i = 0; i < cookie_arr.length; i++){

			$(

			`<div class = 'box-1'>
				<div class = "box-1-s">
					<p>
						<i>乐视自营</i>
					</p>
					<ul class = "o">
						<li class = "li1">
							<input type="checkbox">
							<p><img src="${arr[cookie_arr[i].id].img2}" alt=""></p>
							<nav>
								<p>${arr[cookie_arr[i].id].title} 超级影视会员（1个月会员）</p>
								<span>该商品为套餐商品，其中包含如下单品:</span>
							</nav>
						</li>
						<li class = "li2"><p>${arr[cookie_arr[i].id].price}</p></li>
						<li class = "li3">
							<p>
								<a href="">-</a>
								<span>${cookie_arr[i].num}</span>
								<a href="">+</a>	
							</p>
							<p>
								有货
							</p>
						</li>
						<li class = "li4">
							<span>${arr[cookie_arr[i].id].price}</span>
						</li>
						<li class = "li5">
							<span id = 'cancel'>删除</span>
						</li>
					</ul>
					<ul class = "p">
						<li class = 'li6'>
							<p><img src="${arr[cookie_arr[i].id].img2}" alt=""></p>
							<span>${arr[cookie_arr[i].id].title}</span>
							<div>${cookie_arr[i].num}</div>
						</li>
						<li class = 'li7'>
							<p><img src="${arr[cookie_arr[i].id].img2}" alt=""></p> 
							<span>超级影视会员（1个月会员）</span>
							<div>${cookie_arr[i].num}</div>
						</li>		
					</ul>
				</div>
			</div>`
			).appendTo($(".box"));
					}
				}
			})
		

























	}
	return{
		shopCar:shopCar
	}
})