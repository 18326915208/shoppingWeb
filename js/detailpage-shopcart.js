var $=require("jquery");
//加入购物车-关闭
var $zsclose=$(".zs-close");
var $zslayerbox=$(".zs-layer-box");
var $storebuy=$(".store-buy");
$storebuy.click(function(){
	$zslayerbox.css({"display":"block"});
})
$zsclose.click(function(){
	$zslayerbox.css({"display":"none"});
})
//加入购物车数量
var $decrease=$(".zs-decrease");
var $increase=$(".zs-increase");
var $number=$("#zp-goods-number");
var $val=$number.val();
$decrease.click(function(){
	$val==1 || $val--;
	$number.val($val);
})
$increase.click(function(){
	$val==20 || $val++;
	$number.val($val);
})
module.exports=$;