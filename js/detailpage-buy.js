var $=require("jquery");
var $buynow=$(".buy-now");
var $nowbuy=$(".nowbuy");
var $mobile=$(".mobile");
$buynow.click(function(){
	$nowbuy.css({"display":"block"});
})
$mobile.click(function(){
	$nowbuy.css({"display":"none"});
})
module.exports=$;