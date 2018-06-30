require(["config"],function(){
	require(["jquery"],function($){
		//验证正确
			function zhengze(userid){
				$(userid).removeClass("err");
				$(userid).addClass("succeed");
				$(userid).children("i").addClass("icon-form-true");
				$(userid).css("display","block");
			}	
			//验证错误
			function err(userid){
				$(userid).removeClass("succeed");
				$(userid).addClass("err");
				$(userid).children("i").addClass("icon-tishi");
				$(userid).css("display","block");
			}
		//验证码随机生成
		function getyan(){
			var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
			var arrLenght=all.length;
			var b = "";
			for (var i = 0; i <= 5; i++) {
				var index = Math.floor(Math.random() * arrLenght);
				b += all.charAt(index);
			}				
			$("#yan").html(b);			
		}
		//验证输入框
			$("#yanzhengma").blur(function(){
				var _yantext=$("#yanzhengma").val(),
				//获取生成的验证码
					 _yanvalue=$("#yan").html();
				console.log(_yantext);
				console.log(_yanvalue);
				if(_yantext===_yanvalue){
					zhengze("#erryan");
					$("#erryan em").html("正确");							
				}else{
					err("#erryan");
					$("#erryan em").html("验证码错误");											
				}
			});
			
		//修改验证码
			$("#yan").onclick=function(){
				getyan();
			}
	//页面加载完后执行
		$(document).ready(function(){			
			//手机获取焦点验证
			$("#userPhone").blur(function(){
				var phone=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]){0,2}\d{8}$/,					 
					userPhone=$("#userPhone").val(),					 
					phoneStr=phone.test(userPhone);					
				if(phoneStr==true){		
					zhengze("#errPhone");					
					$("#errPhone em").html("手机号码可以使用");					
				}else{			
					err("#errPhone");					
					$("#errPhone em").html("您输入的手机号己注册，请重新输入");
				}
				
			})
			//密码验证
			$("#userPass").blur(function(){
				var  pass=/^.{6,16}$/,					 
					 userPass=$("#userPass").val(),					 
					passStr=pass.test(userPass);				
				if(passStr===true){
					zhengze("#errPass");					
					$("#errPass em").html("密码可以使用");
				}else{
					err("#errPass");					
					$("#errPass em").html("密码不可用");
				}
			})
			//确认密码
			$("#confirm").change(function(){
				var confirmpassStr=$("#userPass").val(),
					userPass=$("#confirm").val()
					$("#confirm").blur(function(){					 								
					if(userPass===confirmpassStr){
						zhengze("#confirmPass");						
						$("#confirmPass em").html("密码确认成功");
					}else{
						err("#confirmPass");						
						$("#confirmPass em").html("两次密码不一样");
					}
				});
			});
			//验证码
			//调用验证码			
				getyan();			
			
			
			
			
		});
		
	});
});
