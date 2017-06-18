var $=require("jquery");
//加载图片
var $openteam=$(".opeateam");
var $goodsteam=$(".goods-team li");
var $nowdayTop=$(".nowday").offset().top;//586 h85
var $nowdayH=$(".nowday").height();
var $goodsfirstH=$(".goods-first").height();//2508
//console.log($(".goods-first").height(),$nowdayTop,$(".nowday").height())
//var $oli=$(".goods li");
//预加载
var oImg=new Image();
var $overtime=null;
oImg.src="img/sp-shadow2.png";
$goodsteam.html(oImg);
var $top1=$nowdayTop+$goodsfirstH+$nowdayH;//217 +2508+85
var $todayH=$(".today_tit").height();//86
var $allTop=$top1+72;
$(window).scroll(function(){
	if($("body").scrollTop()>=$top1-217 && $("body").scrollTop()<=$allTop){
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
						<a href='http://127.0.0.1:8020/zol_gnn/detailpage.html'>"+res[i].title+"</a>\
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
				$goodsteam.eq(i).html(str1);
			}
		}
	});
	}
})
//<div class='show-time'>\
//	<div class='shadow'></div>\
//	<p class='time'>\
//		<span class='countdown'>剩余：<em class='day'>3</em>天<em class='hour'>02</em>时<em class='minute'>53</em>分<em class='second'>32</em>秒</span>\
//	</p>\
//</div>\
module.exports=$;