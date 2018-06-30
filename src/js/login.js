require(["config"],function(){
	require(["jquery","load"],function($){	
		//qq登录
		QC.Login({
                    //btnId：插入按钮的节点id，必选
                    btnId:"qqLoginBtn",
                    //用户需要确认的scope授权项，可选，默认all
                    scope:"all",
                    //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
                    size: "B_S"
                }, function(reqData, opts){//登录成功
                    //根据返回数据，更换按钮显示状态方法
                    console.log(reqData);//查看返回数据
                    QC.Login.getMe(function(openId, accessToken){//获取用户的openId
                        console.log('QQOPENID:'+openId);
                        thirdparty(null,null,reqData.figureurl_qq_2,reqData.nickname,1,openId);
                        QC.Login.signOut();//退出QQ登录调用事件
                    });
                }
            );
		//微信登录
            $('.weixin-login').on('click',function(){
	            window.location.href='https://open.weixin.qq.com/connect/qrconnect?' +
	                'appid=wxb3a5c0d86b634f9e&redirect_uri=https%3A%2F%2Fwww.zuipin.cn%2FwxLogin'+window.location.pathname.substr(1)+'&response_type=code&scope=snsapi_login&state=ce8YhE4fAeMhC7RlRJIUt0okJMxDBQCrzIdh0DVr';
	        });	
	        
	        //修改qq图标路径
	        $(document).ready(function(){
	        	var imgsrc=$("#qqLoginBtn").children("a").children("img"); 
	        	console.log(imgsrc)
           			imgsrc.attr("src","../img/index_img/qq.png");
	        })
	    //登录验证
	    $(document).ready(function(){
	    	//选项卡切换
	    		$("#zhlogin").click(function(){
	    			$("#duanxin").hide();
	    			$("#zhanghao").show();
	    		})
	    		$("#dxlogin").click(function(){
	    			$("#zhanghao").hide();
	    			$("#duanxin").show();
	    		})
	    	
	    	var lPhone=/^[1][3,4,5,7,8][0-9]{9}$/,		    	
	    	    lPass=/^.{6,16}$/;	    	    
	    	      	    
	    	    $("#loginUser").blur(function(){
	    	    	var	_loginUser=$("#loginUser").val(),
	    	    		regUser=lPhone.test(_loginUser);	    	    	    	    		
	    	    	console.log(_loginUser);
	    	    	if(regUser===false){
		    	    	$("#regTiShi").css("color","red");
		    	    	$("#regTiShi").css("display","block");
		    	    	$("#regTiShi i").addClass("icon-tishi");
		    	    	$("#regTiShi em").html("账号格式不正确");
		    	    	//$("#loginPass").attr("disabled","disabled");
		    	    	$("#loginUser").focus();
		    	    }else{
		    	    	$("#regTiShi").css("display","none");
		    	    	$("#loginPass").removeAttr("disabled","disabled");
		    	    }
	    	    });
	    	    $("#loginPass").blur(function(){
	    	    	var _loginPass=$("#loginPass").val(),
	    	    		regPass=lPass.test(_loginPass);
	    	    	if(regPass==false){
		    	    	$("#regTiShi").css("color","red");
		    	    	$("#regTiShi").css("display","block");
		    	    	$("#regTiShi i").addClass("icon-tishi");
		    	    	$("#regTiShi em").html("密码至少六位");
//		    	    	$("#loginBtn").attr("disabled","disabled");
						$("#loginPass").focus();
		    	    }else{
		    	    	$("#regTiShi").css("display","none");
		    	    	$("#loginBtn").removeAttr("disabled","disabled");
		    	    	$("#loginBtn").css("background","red");
		    	    }
	    	    });
	    	    $("#loginBtn").click(function(){
	    	    	var	btnUsers=$("#loginUser").val(),
	    	    		_btnUsers=lPhone.test(btnUsers),
	    	    		btnPass=$("#loginPass").val(),
	    	    		_regPass=lPass.test(btnPass);
	    	    	if(_btnUsers==true&&_regPass==true){		    	    	
		    	    	window.location.href = "../index.html";
		    	    }
	    	    })	       
	    })
	});
});
