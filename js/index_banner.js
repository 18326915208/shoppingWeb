var $=require("jquery");
//banner
var $banner=$(".banner");
var $dotli=$(".dot-list li");
var $but=$(".but");
var $index=0;
var $len=$dotli.length;//3
var $num=0;
var time=null;
clearInterval(time);
$banner.hover(function(){
	clearInterval(time);
	$but.css({"display":"block"});
},function(){
	time=setInterval(nex,2000);
	$but.css({"display":"none"});
})
$dotli.mouseover(function(){
	$index=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".banner-list").animate({"left":-$index*$(".banner-list li").width()});
})
$(".next").click(function(){
	nex();
})
$(".prev").click(function(){
	if(!$(".banner-list").is(":animated")){
		$index--;
		if($index<0){
			$index=$len-1;
			$(".banner-list").css({"left":-($index+1)*$(".banner-list li").width()})
		}
		$num--;
		if($num<0){
			$num=$len-1;
		}
		$dotli.eq($num).addClass("active").siblings().removeClass("active");
		$(".banner-list").animate({"left":-$index*$(".banner-list li").width()});
	}
})
time=setInterval(nex,2000);
function nex(){
	if(!$(".banner-list").is(":animated")){
		$index++;
		if($index>$len){
			$index=1;
			$(".banner-list").css({"left":"0"})
		}
		$num++;
		if($num>$len-1){
			$num=0;
		}
		$dotli.eq($num).addClass("active").siblings().removeClass("active");
		$(".banner-list").animate({"left":-$index*$(".banner-list li").width()});
	}
}
module.exports=$;