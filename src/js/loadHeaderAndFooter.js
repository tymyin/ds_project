define(["jquery","template"],function($,template){
	$(".header").load("/html/include/header.html");
	$(".footer").load("/html/include/footer.html");
	
	//搜索框获取焦点
	$(document).ready(function(){		
		//滚动鼠标后显示返回头部按钮
			$(window).scroll(function(){
				var scroll=document.documentElement.scrollTop;
				if(scroll>=900){
					$("#backtop").css("display","block");				
				}
				if(scroll<=0){				
					$("#backtop").css("display","none");
				}
			});	
	});
	
	
});

