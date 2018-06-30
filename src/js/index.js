require(["config"],function(){
	require(["jquery","template","load"],function($,template){	
		//页面加载完成后执行
		$(document).ready(function(e){
			//滚动鼠标后显示浮动的头部
			$(window).scroll(function(){
				var scroll=document.documentElement.scrollTop;
				if(scroll>=900){
					$("#floatTop").css("display","block");				
				}
				if(scroll<=0){				
					$("#floatTop").css("display","none");
				}
			});
			
		});
		//自执行
		$(function(){
			//加载菜单列表
			$.getJSON("/mock/menu.json",function(data){				
				//模板渲染
				const html=template("menu_data",{list:data.res_body.list});					
				//显示
				$("#menu_list").prepend(html);					
			});
			
			//加载特价商品
			$.getJSON("/mock/tejia.json",function(data){
				//模板渲染
				const html=template("tejia_date",{list:data.res_body.list});
				//显示
				$("#tejia_list").prepend(html);
			});
			
			//加载自饮
			$.getJSON("/mock/ziyin.json",function(data){				
				const html=template("ziyin_data",{list:data.res_body.list});
				$("#ziyinList").prepend(html);
			});
			//加载送礼
			$.getJSON("/mock/songli.json",function(data){				
				const html=template("songli_data",{list:data.res_body.list});
				$("#songliList").prepend(html);
			});
			//加载茶具
			$.getJSON("/mock/chaqi.json",function(data){				
				const html=template("chaju_data",{list:data.res_body.list});
				$("#chajuList").prepend(html);
			});
			//加载热评
			$.getJSON("/mock/reping.json",function(data){				
				const html=template("reping_data",{list:data.res_body.list});
				$("#repingList").prepend(html);
			});
			//加载头条
			$.getJSON("/mock/zuipintoutiao.json",function(data){				
				const html=template("toutiao_data",{list:data.res_body.list});
				$("#toutiaoList").prepend(html);
			});
		});
	});
});
