var $=require("jquery");

var $dingyue=$(".dingyue");
var $emailbox=$(".email-box");
$dingyue.hover(function(){
	$emailbox.css({"display":"block"});
},function(){
	$emailbox.css({"display":"none"});
})
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