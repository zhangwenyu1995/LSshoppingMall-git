$.ajax({
			url:'data/scrLeftConRefriger.json',
			success:function(data){
				for(var i = 0; i< data.length;i++){
					$(`<li>
						<img src="${data[i].src}" alt="tva">
						<p>${data[i].title}</p>
						<a href="#">${data[i].buy}</a>
					</li>`).appendTo('.Su4');
					}
				}
		})