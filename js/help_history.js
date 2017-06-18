var $=require("jquery");
var $history=$(".history");
var $historydown=$(".history-down")
$history.hover(function(){
	$history.addClass("his-bg");
	$historydown.css({"display":"block"});
},function(){
	$history.removeClass("his-bg");
	$historydown.css({"display":"none"});
})
module.exports=$;