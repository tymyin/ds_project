define(["jquery","template"],function($,template){
	$(".header").load("/html/include/header.html");
	$(".footer").load("/html/include/footer.html");
	
	//搜索框获取焦点
	$(document).ready(function(){		
		
		//加载菜单列表
			$.getJSON("../mock/menu.json",function(data){				
				//模板渲染
				const html=template("hmenu_data",{list:data.res_body.list});					
				//显示
				$("#hmenu_list").prepend(html);	
			});
			
			//
			$("#showdiv").hover(function(){
				$("#hmenu_list").show();
			});
	});
	
	
});

