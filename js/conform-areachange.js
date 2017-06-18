var $=require("jquery");
var $addrinfo=$(".addr_info");
var $editor=$(".editor");
var $drop=$(".drop");
$editor.click(function(){
	$addrinfo.css({"display":"block"})
})

//确认收获地址
var $savebtn=$(".savebtn");
var $newspan=$(".newspan")
var $newspan1=$(".newspan1");
var $newspan2=$(".newspan2");
var $newspan3=$(".newspan3");
var $newspan4=$(".newspan4");
var $shouhuo=$(".shouhuo");
var $addnew=$(".addnew");
var $sheng=$(".sheng option");
var $newstrong=$(".newspan strong");
var $detaddr=$(".det_addr");
var $mobilephone=$(".mobilephone");
var $phonetext=$(".phonetext");
$savebtn.click(function(){
	$addrinfo.css({"display":"none"});
	$addnew.css({"display":"none"});
	$newstrong.html($shouhuo.val());
	$newspan1.html($sheng.val());
	$newspan2.html($detaddr.val());
	$newspan3.html($mobilephone.val());
	$newspan4.html($phonetext.val());
})
$drop.click(function(){
	$newspan.css({"display":"none"});
	$addnew.css({"display":"inline-block"});
})
module.exports=$;
