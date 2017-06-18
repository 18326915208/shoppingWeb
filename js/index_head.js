var $=require("jquery");
//首页头部header
var $headercrli=$(".header_c_r li");
var $guanzhu=$(".guanzhu");
var $hdhover=$(".hd_hover");
var $remind=$(".remind");
var $code=$(".code");
var $emailbox=$(".email-box");
$headercrli.hover(function(){
	var $this=$(this).index();
	$(this).find(".head-pub").css({"display":"block"});
	$headercrli.eq("$this").find("i").addClass("si");
},function(){
	var $this=$(this).index();
	$(this).find(".head-pub").css({"display":"none"});
	$headercrli.eq("$this").find("i").removeClass("si");
})
//订阅验证
var $tuanemail=$("#tuan_email");
var $tuanbutton=$("#tuan_button");
var $tuanerror=$("#tuan_error");
$tuanemail.blur(function(){
	var $val=$tuanemail.value;
	var reg= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(reg.test($val)){
		$tuanemail.html("$val");
	}else{
		$tuanerror.html("请输入email地址");
		$tuanerror.css({"color":"red"});
		$tuanemail.mouseout(function(){
			$tuanerror.html("推荐时间：每周二、四、六（节假日除外）");
			$tuanerror.css({"color":"#ddd"})
		})
	}
})
module.exports=$;