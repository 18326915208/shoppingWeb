var $=require("jquery");
//吸顶
var $nowday=$(".nowday");
var $nowdayTop=$nowday.offset().top;
$(window).scroll(function(e){
	e=e||event;
	if(getScroll()>=$nowdayTop){
		$nowday.addClass("fixed");
		$(".day-down").removeClass("marginT");
	}else if(getScroll()<=$nowdayTop){
		$nowday.removeClass("fixed");
		$(".day-down").addClass("marginT");
	}
})
function getScroll(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}
//团购切换
var $sortsli=$(".sorts li");
var $goods=$(".goods");
$sortsli.click(function(){
	var $index=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$goods.eq($index).addClass("goods-first").siblings().removeClass("goods-first");
	$sortsli.eq($index).find("a b").removeClass("arrow-down").addClass("arrow-down-up").siblings().removeClass("arrow-down-up");
})
module.exports=$;