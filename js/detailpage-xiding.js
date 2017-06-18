var $=require("jquery");
//吸顶盒
var $zstab=$(".zs_tab");
var $zstabTop=$(".zs_tab").offset().top;
var $zsbuybtn=$(".zs_buy_btn");
$(window).scroll(function(e){
	e=e||event;
	if(getScroll()>=$zstabTop){
		$zstab.addClass("fixed");
		$zsbuybtn.css({"display":"block"});
	}else if(getScroll()<=$zstabTop){
		$zstab.removeClass("fixed");
		$zsbuybtn.css({"display":"none"})
	}
})
function getScroll(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}
//right吸顶
$sideright=$(".zs_side_right");
$siderightTop=$(".zs_side_right").offset().top;
$(window).scroll(function(e){
	e=e||event;
	if(getScroll()>=$siderightTop){
		$sideright.addClass("right_fixed");
	}else if(getScroll()<=$zstabTop){
		$sideright.removeClass("right_fixed");
	}
})
module.exports=$;