var $=require("jquery");
//今日团
var $todaylist=$(".today-list li");
$todaylist.mouseover(function(){
	var $this=$(this).index();
	$(this).find(".detail-list").css({"display":"block"});
	$todaylist.eq($this).find(".day-i").addClass("day-i-up");
})
$todaylist.mouseout(function(){
	var $this=$(this).index();
	$(this).find(".detail-list").css({"display":"none"});
	$todaylist.eq($this).find(".day-i").removeClass("day-i-up");
})
module.exports=$;