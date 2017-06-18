var $=require("jquery");
//分享收藏
var $show=$(".show");
var $showshade=$(".show-shade");
$show.hover(function(){
	$showshade.css({"display":"block"});
},function(){
	$showshade.css({"display":"none"});
})
module.exports=$;