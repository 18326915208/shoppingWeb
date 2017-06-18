var $=require("jquery");
//页
var $pageall=$(".pageall");
$pageall.click(function(){
	$(this).addClass("sel").siblings().removeClass("sel");	
})
module.exports=$;