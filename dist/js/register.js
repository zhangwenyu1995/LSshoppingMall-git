console.log("register数据加载成功");
define(['jquery'],function($){
	function register(){

		/*$('.login').click(function(){
			console.log(1);
		})*/
		// console.log("register数据加载成功");
		

//1.用户名注册
		var oUsername = document.getElementById('username');
		var oaSpans  = document.getElementById('aSpans');
		oUsername.onblur = function(){
			
			//当失去焦点时的判断
			//1、如果我们在输入的时候，不小心输入了空格，将空格祛除掉
			var oValue = oUsername.value.replace(/ /ig,"");
			oUsername.value = oValue;
			//2.对用户进行验证
			/*if(!oValue){
				oaSpans.innerHTML = '请输入手机号';
			}else */
			if(oValue.length != 11  ){
				oaSpans.innerHTML = '请输入正确的手机号';
				
			}else{
				//判断每一个字符都要符合要求
				var isYes = true; //假设用户名是正确的
				for(var i = 0; i < oValue.length; i++){
					if(!isabc(oValue[i])){
								isYes = false; 
								
								break;
							}
				}
				if(isYes){
					oaSpans.innerHTML = '';
				}else{
					oaSpans.innerHTML = '中国大陆仅支持手机号注册'
				
				}
			}
		}

//2.输入密码

		var oPassword = document.getElementById('password');
		var oaSpans  = document.getElementById('aSpans');

		oPassword.onblur = function(){
			var oPasswordValue = oPassword.value.replace(/ /ig,"");
			oPassword.value = oPasswordValue ;
			var box = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
			var oBox = box.test(oPasswordValue);
			if(oBox ){
				oaSpans.innerHTML = "";
			}else{
				oaSpans.innerHTML = "密码格式错误，密码格式为6-16位字母/数字/符号，不可设置为常见简单弱密码";
				
			}			
		}
			
//3.输入验证码
		var oRandomvalue = document.getElementById('random_num');
		var oBtnrandom = document.getElementById('random');
			
		oBtnrandom.onclick = function(){
			var oBtnrandom = document.getElementById('random');
			oBtnrandom .innerHTML = testCodeWithStr(5);
		}
//4.点击注册的ajax请求
	
		 var o = document.getElementById('register');
			o.onclick = function(){
				var str = `username=${$("#username").val()}
				&password=${$("#password").val()}`;
				alert(1)
				$.ajax({
						method: "post",
						url: "./php/register.php",
						data: str,
						success: function(data){
							alert(data);
							oaSpans.innerHTML = '注册成功';
						},
						error: function(msg){
							alert(msg);
							oaSpans.innerHTML = '注册失败';
						}
					})		
			}

				/*$('.login').click(function(){
					alert(1)
				})
*/




		
//随机验证码
		function testCodeWithStr(n){
				var arr = [];
				for(var i = 0; i < n; i++){
					var num = parseInt(Math.random() * 100);
					if(num >= 0 && num <= 9){
						arr.push(num);
					}else if(num >= 65 && num <= 90){
						var str = String.fromCharCode(num);
						arr.push(str);
					}else if(num >= 17 && num <= 42){
						var str = String.fromCharCode(num + 80);
						arr.push(str);
					}else{
						//随机出来没有用的数字，i--让他多循环一次。
						i--;
					}
				}
				return arr.join("");
			}
			
			//n是随机验证码的个数
			function testCode(n){
				var arr = [];
				for(var i = 0; i < n; i++){
					var num = parseInt(Math.random() * 10);
					arr.push(num);
				}
				return arr.join("");
			}





		//判断一个字符是否是数字
			function isabc(charStr){
				if( 
				 charStr >= "0" && charStr <= "9" 
				 ){
					return true;
				}else{
					return false;
				}
			}

		//判断一个字符是否是数字、字母、下划线
			function isABC(charStr){
				if(charStr >= "A" && charStr <= "Z" || charStr >= "a" && charStr <= "z" || charStr >= "0" && charStr <= "9" || charStr == "_"){
					return true;
				}else{
					return false;
				}
			}























	}
	return{
		register:register
	}

})