//var $=require("jquery");

//var $dingyue=$(".dingyue");
//var $emailbox=$(".email-box");
//$dingyue.hover(function(){
//	$emailbox.css({"display":"block"});
//},function(){
//	$emailbox.css({"display":"none"});
//})
//var $tuanemail=$("#tuan_email");
//var $tuanbutton=$("#tuan_button");
//var $tuanerror=$("#tuan_error");
//$tuanemail.blur(function(){
//	var $val=$tuanemail.value;
//	var reg= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//	if(reg.test($val)){
//		$tuanemail.html("$val");
//	}else{
//		$tuanerror.html("请输入email地址");
//		$tuanerror.css({"color":"red"});
//		$tuanemail.mouseout(function(){
//			$tuanerror.html("推荐时间：每周二、四、六（节假日除外）");
//			$tuanerror.css({"color":"#ddd"})
//		})
//	}
//})
////history历史浏览记录
//var $history=$(".history");
//var $historydown=$(".history-down")
//$history.hover(function(){
//	$history.addClass("his-bg");
//	$historydown.css({"display":"block"});
//},function(){
//	$history.removeClass("his-bg");
//	$historydown.css({"display":"none"});
//})
////问题切换
//var $ordertab=$(".order-tab li");
//var $problem=$(".problem");
//$ordertab.click(function(){
//	$(this).addClass("cur").siblings().removeClass("cur");
//	$problem.eq($(this).index()).addClass("problem-first").siblings().removeClass("problem-first");
//})
//
////problem
//var $probleli=$(".problem li");
//var $conts=$(".conts");
//var $onoff=true;
//$probleli.click(function(){
//	var $this=$(this).index();
//	if($onoff){
//		$(this).addClass("cur");
//		$conts.eq($this).css({"display":"none"});
//		$onoff=false;
//	}else{
//		$(this).removeClass("cur");
//		$conts.eq($this).css({"display":"block"});
//		$onoff=true;
//	}
//})

////side轮播
//var $lunbo=$("lunbo");
//var $lunboca=$(".lunbo-c a");
//var $lundotsp=$(".lun-dot span");
//var $m=0;
//var luntime=null;
//$lunbo.hover(function(){
//	clearInterval(luntime);
//},function(){
//	luntime=setInterval(lun,2000);
//})
//$lundotsp.mouseover(function(){
//	var $this=$(this).index();
//	$(this).addClass("lun-cur").siblings().removeClass("lun-cur");
//	$lunboca.eq($this).addClass("luna1").siblings().removeClass("luna1");
//	$m=$this;
//})
//clearInterval(luntime);
//luntime=setInterval(lun,2000);
//function lun(){
//	$m++;
//	if($m>$lundotsp.length){
//		$m=0;
//	}
//	$lundotsp.eq($m).addClass("lun-cur").siblings().removeClass("lun-cur");
//	$lunboca.eq($m).addClass("luna1").siblings().removeClass("luna1");
//}
//
//module.exports=$;