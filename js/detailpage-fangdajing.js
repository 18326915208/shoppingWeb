var $=require("jquery");
//放大镜
var $innpic=$(".inn-pic");
var $innpicimg=$(".inn-pic img");
var $smalllist=$(".inn-small ul li");
var $innshade=$(".inn-shade");
var $shade=$(".shade");
var $innbig=$(".inn-big");
var $innbigimg=$(".inn-big img");
var $num=0;
$smalllist.click(function(){
	var $this=$(this).index();
	$(this).addClass("pic-click").siblings().removeClass("pic-click");
	$innpicimg.eq($this).addClass("picfirst").siblings().removeClass("picfirst");
	$innbigimg.eq($this).addClass("big-first").siblings().removeClass("big-first");
	$num=$this;
})
$innpic.hover(function(){
	$innshade.css({"display":"block"});
	$innbig.css({"display":"block"});
},function(){
	$innshade.css({"display":"none"});
	$innbig.css({"display":"none"});
})
$innpic.mousemove(function(e){
	e=e||event;
	var scorllHeight=getScroll();
	var cx=e.clientX-$innpic.offset().left-$shade.width()/2;
	var cy=e.clientY-$innpic.offset().top+scorllHeight-$shade.height()/2;
	if(cx<=0){
		cx=0;
	}else if(cx>=$innshade.width()-$shade.width()){
		cx=$innshade.width()-$shade.width();
	}
	if(cy<=0){
		cy=0;
	}else if(cy>=$innshade.height()-$shade.height()){
		cy=$innshade.height()-$shade.height();
	}
	var proX=cx/($innshade.width()-$shade.width());
	var proY=cy/($innshade.height()-$shade.height());
	
	$(".shade").css({"left":cx});
	$(".shade").css({"top":cy});
	$innbigimg.eq($num).css({"margin-left":proX*($innbig.width()-$innbigimg.width())});
	$innbigimg.eq($num).css({"margin-top":proY*($innbig.height()-$innbigimg.height())});
})
$innpic.mouseout(function(){
	$shade.mousemove=null;
})
function getScroll(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}
module.exports=$;