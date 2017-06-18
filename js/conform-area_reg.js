var $=require("jquery");
//收获地址验证
var $savebtn=$(".savebtn");
var $text=$(".text");
var $none=$(".none");
var $shouhuo=$(".shouhuo");
var $sel=$(".sel");
var $detaddr=$(".det_addr");
var $phonetext=$(".phonetext");
var $shouhuowrong=$(".shouhuowrong");
var $selwrong=$(".selwrong");
var $addrwrong=$(".addrwrong");
var $phongwrong=$(".phongwrong");
//获取所有input焦点
$text.focus(function(){
	$(this).css({"border-color":"dodgerblue"});
})
$text.blur(function(){
	$(this).css({"border-color":"#d6d6d6"});
})
//$shouhuo.blur(function(){
//	var sval=$shouhuo.val();
//	var reg=/^\w$/;
//	if(!reg.test(sval)){
//		$shouhuowrong.css({"display":"block"});
//	}
//})

$savebtn.click(function(){
	if($text.val()=="" ){
		$none.css({"display":"block"});
	}else{
		$none.css({"display":"none"});
	}
})
module.exports=$;