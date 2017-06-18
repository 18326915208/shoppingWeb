var $=require("jquery");
//right-fixed
var $rightfixed=$(".right-fixed");
var $rfixli=$(".right-fixed li").first();
var $rcode=$(".right-code");
$rfixli.hover(function(){
	$rcode.css({"display":"block"});
},function(){
	$rcode.css({"display":"none"});
})
var $bodyH=$("body").height();
$(window).scroll(function(e){
	e=e||event;
	if(getScroll()>=parseInt($bodyH/3)){
		$rightfixed.fadeIn(900);
	}else if(getScroll()<=parseInt($bodyH/3)){
		$rightfixed.fadeOut(900);
	}
})
function getScroll(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}
//点击回到顶部
var $up=$(".up");
var $settime=null;
$up.click(function(){
	var a=document.body.scrollTop;
	if(document.documentElement.scrollTop){
		a=document.documentElement.scrollTop
	}else{
		a=document.body.scrollTop;
	}
	$settime=setInterval(function(){
		document.documentElement.scrollTop=a;
		document.body.scrollTop=a;
		a-=100;
		if(a<0){
			a=0;
			clearInterval($settime);
		}
	},20)
})
module.exports=$;