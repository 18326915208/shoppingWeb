var $=require("jquery");
//加载图片
var $goods=$(".goods");
var $olifirst=$(".goods-first li");
//var $goodsteam=$(".goods-team li");
var $oli=$(".goods li");
//预加载
var oImg=new Image();
var $overtime=null;
oImg.src="img/sp-shadow2.png";
$olifirst.html(oImg);
//$goodsteam.html(oImg);
var $nowdayTop=$(".nowday").offset().top;//217
var $todayTop=$(".today_tit").height();//85
var $allTop=$nowdayTop+$todayTop;
$(window).scroll(function(){
	if($("body").scrollTop()>=$nowdayTop-210&&$("body").scrollTop()<=$allTop){
		$.ajax({
		url:"http://127.0.0.1/zol_gnn/php/goods.php",
		dataType:"json",
		success:function(res){
			var str1="";
			for(var i=0;i<24;i++){
				str1="<div class='pic'>\
						<img class='pic-img' src='"+res[i].img+"'/>\
					</div>\
					<h4>\
						<a href='http://127.0.0.1/zol_gnn/detailpage.html'>"+res[i].title+"</a>\
					</h4>\
					<span class='msg'>"+res[i].remark+"</span>\
					<div class='price-box clear'>\
						<span class='now-price l'>"+res[i].nowprice+"</span>\
						<div class='price-info l'>\
							<p class='old-price'>"+res[i].oldprice+"</p>\
							<span class='discount'>"+res[i].accont+"</span>\
						</div>\
						<span class='now-rob r'>马上抢</span>\
					</div>";
				$oli.eq(i).html(str1);
			}
		}
	});
	}
})

//倒计时
//var $day=$(".day");
//var $hour=$(".hour");
//var $min=$(".minute");
//var $sec=$(".second");
//var timesd=null;
//timesd=setInterval(timedown,1000);
//timedown();
//function timedown(){
//	var $outTime=new Date("2017/4/19 17:00:00");
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


module.exports=$;