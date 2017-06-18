
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
////订阅验证
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
////banner
//var $banner=$(".banner");
//var $dotli=$(".dot-list li");
//var $but=$(".but");
//var $index=0;
//var $len=$dotli.length;//3
//var $num=0;
//var time=null;
//clearInterval(time);
//$banner.hover(function(){
//	clearInterval(time);
//	$but.css({"display":"block"});
//},function(){
//	time=setInterval(nex,2000);
//	$but.css({"display":"none"});
//})
//$dotli.mouseover(function(){
//	$index=$(this).index();
//	$(this).addClass("active").siblings().removeClass("active");
//	$(".banner-list").animate({"left":-$index*$(".banner-list li").width()});
//})
//$(".next").click(function(){
//	nex();
//})
//$(".prev").click(function(){
//	if(!$(".banner-list").is(":animated")){
//		$index--;
//		if($index<0){
//			$index=$len-1;
//			$(".banner-list").css({"left":-($index+1)*$(".banner-list li").width()})
//		}
//		$num--;
//		if($num<0){
//			$num=$len-1;
//		}
//		$dotli.eq($num).addClass("active").siblings().removeClass("active");
//		$(".banner-list").animate({"left":-$index*$(".banner-list li").width()});
//	}
//})
//time=setInterval(nex,2000);
//function nex(){
//	if(!$(".banner-list").is(":animated")){
//		$index++;
//		if($index>$len){
//			$index=1;
//			$(".banner-list").css({"left":"0"})
//		}
//		$num++;
//		if($num>$len-1){
//			$num=0;
//		}
//		$dotli.eq($num).addClass("active").siblings().removeClass("active");
//		$(".banner-list").animate({"left":-$index*$(".banner-list li").width()});
//	}
//}
////今日团
//var $todaylist=$(".today-list li");
//var $nowday=$(".nowday");
//var $sortsli=$(".sorts li");
//var $goods=$(".goods");
//var $arrowdown=$(".arrow-down");
//var $nowdayTop=$nowday.offset().top;
//$todaylist.mouseover(function(){
//	var $this=$(this).index();
//	$(this).find(".detail-list").css({"display":"block"});
//	$todaylist.eq($this).find(".day-i").addClass("day-i-up");
//})
//$todaylist.mouseout(function(){
//	var $this=$(this).index();
//	$(this).find(".detail-list").css({"display":"none"});
//	$todaylist.eq($this).find(".day-i").removeClass("day-i-up");
//})
////吸顶
//$(window).scroll(function(e){
//	e=e||event;
//	if(getScroll()>=$nowdayTop){
//		$nowday.addClass("fixed");
//		$(".day-down").removeClass("marginT");
//	}else if(getScroll()<=$nowdayTop){
//		$nowday.removeClass("fixed");
//		$(".day-down").addClass("marginT");
//	}
//})
//function getScroll(){
//	return document.documentElement.scrollTop||document.body.scrollTop;
//}
////团购切换
//$sortsli.click(function(){
//	var $index=$(this).index();
//	$(this).addClass("active").siblings().removeClass("active");
//	$goods.eq($index).addClass("goods-first").siblings().removeClass("goods-first");
//	$sortsli.eq($index).find("a b").removeClass("arrow-down").addClass("arrow-down-up").siblings().removeClass("arrow-down-up");
//})
////right-fixed
//var $rightfixed=$(".right-fixed");
//var $rfixli=$(".right-fixed li").first();
//var $rcode=$(".right-code");
//$rfixli.hover(function(){
//	$rcode.css({"display":"block"});
//},function(){
//	$rcode.css({"display":"none"});
//})
//var $bodyH=$("body").height();
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
////点击回到顶部
//var $up=$(".up");
//var $settime=null;
//$up.click(function(){
//	var a=document.body.scrollTop;
//	if(document.documentElement.scrollTop){
//		a=document.documentElement.scrollTop
//	}else{
//		a=document.body.scrollTop;
//	}
//	$settime=setInterval(function(){
//		document.documentElement.scrollTop=a;
//		document.body.scrollTop=a;
//		a-=100;
//		if(a<0){
//			a=0;
//			clearInterval($settime);
//		}
//	},20)
//})

//
////加载图片
//var $goods=$(".goods");
//var $moregoods=$(".more-goods");
//var $oli=$(".goods li");
//var $n=0;
////var str="";
////for(var i=0;i<24;i++){
////	str+="<li></li>";
////	$goods.html(str);
////}
////预加载
//var oImg=new Image();
//var $overtime=null;
//oImg.src="img/sp-shadow2.png";
//$oli.html(oImg);
//clearInterval($overtime);
//$overtime=setInterval(function(){
//	more($n);
//},1000);
//
////点击更多
//$moregoods.click(function(){
//	$n+=24;
//	if($n>100){
//		return;
//	}
//	more($n);
//});
//
//function more($n){
//	$.ajax({
//		url:"http://127.0.0.1/zol_gnn/php/goods.php",
//		dataType:"json",
//		success:function(res){
//			var str1="";
//			for(var i=$n;i<(24+$n);i++){
//				str1="<div class='pic'>\
//						<img class='pic-img' src='"+res[i].img+"'/>\
//						<div class='show-time'>\
//							<div class='shadow'></div>\
//							<p class='time'>\
//								<span class='countdown'>剩余：<em class='day'>3</em>天<em class='hour'>02</em>时<em class='minute'>53</em>分<em class='second'>32</em>秒</span>\
//							</p>\
//						</div>\
//					</div>\
//					<h4>\
//						<a href='#' title='联想 IdeaPad 710S-13（i5 7200U/8GB/256GB） I5-7200U-8G-256G-W10银色'>"+res[i].title+"</a>\
//					</h4>\
//					<span class='msg'>"+res[i].remark+"</span>\
//					<div class='price-box clear'>\
//						<span class='now-price l'>"+res[i].nowprice+"</span>\
//						<div class='price-info l'>\
//							<p class='old-price'>"+res[i].oldprice+"</p>\
//							<span class='discount'>"+res[i].accont+"</span>\
//						</div>\
//						<span class='now-rob r'>马上抢</span>\
//					</div>";
//				$oli.eq(i).html(str1);
//			}
//		}
//	});
//}
//
////倒计时
//var $day=$(".day");
//var $hour=$(".hour");
//var $min=$(".minute");
//var $sec=$(".second");
//var timesd=null;
//timesd=setInterval(timedown,1000);
//timedown();
//function timedown(){
//	var $outTime=new Date("2017/4/19 17:00:00");
////	console.info($outTime);
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
//	console.log(3333333333333333)
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


