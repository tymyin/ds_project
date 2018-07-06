require(["config"],function(){
	require(["jquery","template","load"],function($,template){	
		//页面加载完成后执行
		$(document).ready(function(){
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
			
			
			//倒计时
			var timer=setInterval(function(){
				//当前时间的毫秒值
				var date= new Date();
				var _date=date.getTime();
				
				//终点时间的毫秒值
				var endtime=new Date("2018-07-07T00:00:00");
				
				var _endtime=Date.parse(endtime);
				//差值
				var chazhi=_endtime-_date;
				//总秒数
				var sec=Math.floor(chazhi/1000);
				var _sec=sec%60;//剩余秒数；
				//总分钟；
				var mit=Math.floor(sec/60);//总分钟
				var _mit=mit%60;//剩余分钟
				//总小时
				var hours=Math.floor(mit/60);//总小时
				var _hours=hours%24;//剩余小时
				//天数
				var day=Math.floor(hours/24);
				document.getElementById("day").innerHTML=day;
				document.getElementById("shi").innerHTML=_hours;
				document.getElementById("fen").innerHTML=_mit;
				document.getElementById("miao").innerHTML=_sec;
//				document.getElementById("day").value=day+"天"+_hours+"小时"+_mit+"分钟"+_sec+"秒";
				if(sec<=0){
					clearInterval(timer);
//					document.getElementById("result").value="培训结束";
				}
			},1000);
			
			
		});
	});
});
