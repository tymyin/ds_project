define(["jquery"],function($){
	$(".header").load("/html/include/header.html");
	$(".footer").load("/html/include/footer.html");
	
	//搜索框获取焦点
	$(document).ready(function(){
		$("#searchText").focus(function(){
			console.log($("#searchText"))
			$("#searchBox").css("border-color","#FF0000");		
		});
		
		
	});
	
	
});

