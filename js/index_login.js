var $=require("jquery");
var registerNow=$("#registerNow");
var loginNow=$("#loginNow");
$.ajax({
	url:"http://127.0.0.1/zol_gnn/php/section.php",
	success:function(res){
		if(res!=0){
			var str = "您好,欢迎  "+res+" 登录";
			loginNow.html(str);
			registerNow.html("退出");
			loginNow.attr("href","javascript:;");
			registerNow.click(function(){
				location.href="http://127.0.0.1/zol_gnn/php/delete.php";
				return false;
			})
		}
	}
})
module.exports=$;