var $=require("jquery");
//问题切换
var $ordertab=$(".order-tab li");
var $problem=$(".problem");
$ordertab.click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$problem.eq($(this).index()).addClass("problem-first").siblings().removeClass("problem-first");
})

//problem
var $probleli=$(".problem li");
$probleli.children("h3").click(function(){
	$(this).siblings("div").toggle();
	$(this).addClass("pro_i").siblings().removeClass("pro_i");
})

module.exports=$;