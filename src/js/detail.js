require(["config"],function(){
	require(["jquery","template","load"],function($,template){
		//页面加载完成后执行
		$(document).ready(function(e){
			//滚动鼠标后显示浮动的头部
			$(window).scroll(function(){
				var scroll=document.documentElement.scrollTop;
				if(scroll>=1000){
					$("#candicineTitle").addClass("showCandicineTitle");
					$("#candMinTitle,#addCatTitle").css("display","block");
				}else if(scroll<1000){
					$("#candicineTitle").removeClass("showCandicineTitle");	
					$("#candMinTitle,#addCatTitle").css("display","none");
				}
				
			});
			//点击小图切换对应图片
			$(function(){
				let _minImg=$("#minImg").children("li");										
					for(let i=0;i<_minImg.length;i++){						
						_minImg[i].onclick=function(){	
							let _img=this.children;
							let minImgSrc=$(_img).attr("src"); 
							console.log(minImgSrc);	
							$("#maxImg").attr("src",minImgSrc);											
						}
					}					
			});	
			//详情与评论切换			
			$("#candtitle").click(function(){
				$("#pinglun").hide();
				$("#candicine").show();				
			});
			$("#pingluntitle").click(function(){
				$("#candicine").hide();
				$("#pinglun").show();	
			});
			
			
			
						
		});
	})
})
