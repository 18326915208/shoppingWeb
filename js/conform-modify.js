var $=require("jquery");
//修改
var $modifybtn=$(".modify_btn");
var $modify=$(".modify");
var $com=$(".com");
var $singlepeople=$(".single_people");
var $inputtext=$(".input-text");
var $preserva=$(".preserva");
var $refuse=$(".refuse");
var $invoicespan=$(".invoice_tit span");
$modifybtn.click(function(){
	$modify.css({"display":"block"});
})
$preserva.click(function(){
	$modify.css({"display":"none"});
	if($inputtext.val()!=""){
		$invoicespan.html("发票抬头 ："+$inputtext.val());
	}else{
		$invoicespan.html("发票抬头 ：个人");
	}
})
$refuse.click(function(){
	$modify.css({"display":"none"});
	$invoicespan.html("不开发票");
})
$com.click(function(){
	$inputtext.css({"opacity":1});
})
$singlepeople.click(function(){
	$inputtext.css({"opacity":0});
	$invoicespan.html("发票抬头 ：个人");
})
module.exports=$;