console.log('login数据加载成功');
define(['jquery'],function($){
	function login(){
	
		
//1.用户名登陆
		var oUsername = document.getElementById('username');
		var oaSpans  = document.getElementById('inform_box');
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
		var oaSpans  = document.getElementById('inform_box');

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
//4.点击登录的ajax请求
	
		 var o = document.getElementById('login');
			o.onclick = function(){
				var str = `username=${$("#username").val()}
				&password=${$("#password").val()}`;
				alert(1)
				$.ajax({
						method: "post",
						url: "./php/login.php",
						data: str,
						success: function(data){
							alert("登陆成功");
						},
						error: function(msg){
							alert(msg);
						}
					})		
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


	}
	return{
		login:login
	}
})