var $=require("jquery");
var $loginbtn=$(".login_btn");
var $logouser=$(".logo_user");
var $logopwd=$(".logo_pwd");
var $dengluwrong=$(".denglu_wrong");
var $text=$(".text");
var $formitem=$(".form-item");
$text.focus(function(){
	$(this).css({"border-color":"#c00"})
})
$text.blur(function(){
	$(this).css({"border-color":"#ccc"});
})
$logouser.blur(function(){
	var val=$logouser.val();
	var reg=/^1[345789]\d{9}$/;
	if(!reg.test(val)){
		$dengluwrong.css({"display":"block"});
	}else{
		$dengluwrong.css({"display":"none"});
	}
})
$logopwd.blur(function(){
	var val=$logopwd.val();
	var reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/;
	if(!reg.test(val)){
		$dengluwrong.css({"display":"block"});
	}else{
		$dengluwrong.css({"display":"none"});
	}
})

$loginbtn.click(function(){
	if($logouser.val()=="" || $logopwd.val()==""){
		$dengluwrong.css({"display":"block"});
	}
	$.ajax({
		type:"post",
		url:"http://127.0.0.1/zol_gnn/php/userinfo.php",
		data:"status=login&username="+$logouser.val()+"&password="+$logopwd.val()+" ",
		success:function(res){
			if(res==0){
				alert("账号密码不能为空");
			}else if(res==1){
				alert("用户名已存在");
			}else if(res==2){
				location.href="http://127.0.0.1/zol_gnn/index.html";
			}else if(res==3){
				alert("您输的密码有误");
			}
		}
	});
})
module.exports=$;