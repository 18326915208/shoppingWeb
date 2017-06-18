////header
//var $headercrli=$(".header_c_r li");
//var $guanzhu=$(".guanzhu");
//var $hdhover=$(".hd_hover");
//var $remind=$(".remind");
//var $code=$(".code");
//var $emailbox=$(".email-box");
//$headercrli.hover(function(){
//	var $this=$(this).index();
//	$(this).find(".head-pub").css({"display":"block"});
//	$headercrli.eq("$this").find("i").addClass("si");
//},function(){
//	var $this=$(this).index();
//	$(this).find(".head-pub").css({"display":"none"});
//	$headercrli.eq("$this").find("i").removeClass("si");
//})
//
//
////nav
//var $navcenH3=$(".nav_cen h3");
//var $navcenhi=$(".nav_cen h3 i");
//var $navlistli=$(".nav-list li");
//var $menulist=$(".menu-list");
//$navlistli.click(function(){
//	var $this=$(this).index();
//	$(this).addClass("active").siblings().removeClass("active");
//	$menulist.css({"display":"none"});
//});
//$navlistli.first().click(function(){
//	$menulist.css({"display":"block"});
//	$navcenH3.find("i").css({"display":"none"});
//})
//
////right-fixed
//var $rightfixed=$(".right-fixed");
//var $rfixli=$(".right-fixed li").first();
//var $rcode=$(".right-code");
////console.log($rfixli);
//$rfixli.hover(function(){
//	$rcode.css({"display":"block"});
//},function(){
//	$rcode.css({"display":"none"});
//})
//var $bodyH=$("body").height();
//console.info($bodyH,parseInt($bodyH/3));
//$(window).scroll(function(e){
//	e=e||event;
//	if(getScroll()>=parseInt($bodyH/3)){
//		$rightfixed.fadeIn(900);
//	}else if(getScroll()<=parseInt($bodyH/3)){
//		$rightfixed.fadeOut(900);
//	}
//})
//function getScroll(){
//	return document.documentElement.scrollTop||document.body.scrollTop;
//}
////倒计时
//var $day=$(".day");
//var $hour=$(".hour");
//var $min=$(".minute");
//var $sec=$(".second");
//var timesd=null;
//timesd=setInterval(timedown,1000);
//timedown();
//function timedown(){
//	var $outTime=new Date("2017/4/21 17:00:00");
//	var $nowTime=new Date();
//	var $time=$outTime.getTime()-$nowTime.getTime();
//	var $days= parseInt( $time / 1000 /60 /60 / 24 );
//	var $hours=parseInt($time/1000/60/60-($days*24));
//	var $mins=parseInt($time/1000/60%60);
//	var $secs=parseInt($time/1000%60);
//	if($time<=0){
//		$days = 0;
//		$hours=0;
//		$mins=0;
//		$secs=0;
//		clearInterval(timesd);
//	}
//	$day.html($days);
//	$hour.html(t($hours));
//	$min.html(t($mins));
//	$sec.html(t($secs));
//}
//function t(n){
//	if(n<10){
//		n="0"+n;
//	}
//	return n;
//}
