var $=require("jquery");
//商品详情tab切换
var $zstabullist=$(".zs_tab_ul li");
var $zscontainer=$(".zs_container");
var $zstabli=$(".zs_tab_li");
var $zstabli1=$(".zs_tab_li1");
var $sideulul=$(".side_right_c ul");
//var $zstabTop=$(".zs_tab").offset().top;
var $ind1=0;
$zstabli.click(function(){
	var $this=$(this).index();
	$zstabTop=0;
	$(this).addClass("cur").siblings().removeClass("cur");
	$zscontainer.eq($this).addClass("zs_container_first").siblings().removeClass("zs_container_first")
})
$zstabli1.click(function(){
	if($ind1>1){
		$ind1=0;
	}
	$sideulul.eq($ind1).addClass("side_ul_first").siblings().removeClass("side_ul_first");
	$ind1++;
})
module.exports=$;