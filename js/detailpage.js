var $=require("jquery");
//top 下拉框
function hide(obj1,obj2){
	var object1=obj1;
	var object2=obj2;
	object1.hover(function(){
		object2.css({"display":"block"});
	},function(){
		object2.css({"display":"none"});
	})
}
hide($(".hover_box_phone"),$(".top_box_p"));
hide($(".hover_box_font"),$(".box_font_cont"));
hide($(".hover_box"),$(".top_qr_code"));
//详情
$typelistli=$(".type-list li");
$zsoptionsli=$(".zs-options li");
$typelistli.click(function(){
	$(this).addClass("list-icon").siblings().removeClass("list-icon");
})
$zsoptionsli.click(function(){
	$(this).addClass("li-cur").siblings().removeClass("li-cur");
})
//成交记录
var $titblabel=$(".tit_b label")
$titblabel.click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
})
//nav
//var $navcenH3=$(".nav_cen h3");
//var $navcenhi=$(".nav_cen h3 i");
//var $menulist=$(".menu-list");
//$navcenH3.hover(function(){
//	$menulist.css({"display":"block"});
//	$navcenhi.addClass("hi");
//},function(){
//	$navcenhi.removeClass("hi");
//	$menulist.css({"display":"none"});
//});
////放大镜
//var $innpic=$(".inn-pic");
//var $innpicimg=$(".inn-pic img");
//var $smalllist=$(".inn-small ul li");
//var $innshade=$(".inn-shade");
//var $shade=$(".shade");
//var $innbig=$(".inn-big");
//var $innbigimg=$(".inn-big img");
//var $num=0;
//$smalllist.click(function(){
//	var $this=$(this).index();
//	$(this).addClass("pic-click").siblings().removeClass("pic-click");
//	$innpicimg.eq($this).addClass("picfirst").siblings().removeClass("picfirst");
//	$innbigimg.eq($this).addClass("big-first").siblings().removeClass("big-first");
//	$num=$this;
//})
//$innpic.hover(function(){
//	$innshade.css({"display":"block"});
//	$innbig.css({"display":"block"});
//},function(){
//	$innshade.css({"display":"none"});
//	$innbig.css({"display":"none"});
//})
//$innpic.mousemove(function(e){
//	e=e||event;
//	var scorllHeight=getScroll();
//	var cx=e.clientX-$innpic.offset().left-$shade.width()/2;
//	var cy=e.clientY-$innpic.offset().top+scorllHeight-$shade.height()/2;
//	if(cx<=0){
//		cx=0;
//	}else if(cx>=$innshade.width()-$shade.width()){
//		cx=$innshade.width()-$shade.width();
//	}
//	if(cy<=0){
//		cy=0;
//	}else if(cy>=$innshade.height()-$shade.height()){
//		cy=$innshade.height()-$shade.height();
//	}
//	var proX=cx/($innshade.width()-$shade.width());
//	var proY=cy/($innshade.height()-$shade.height());
//	
//	$(".shade").css({"left":cx});
//	$(".shade").css({"top":cy});
//	$innbigimg.eq($num).css({"margin-left":proX*($innbig.width()-$innbigimg.width())});
//	$innbigimg.eq($num).css({"margin-top":proY*($innbig.height()-$innbigimg.height())});
//})
//$innpic.mouseout(function(){
//	$shade.mousemove=null;
//})
////倒计时
//var $day=$(".day");
//var $hour=$(".hour");
//var $min=$(".minute");
//var $sec=$(".second");
//var timesd=null;
//timesd=setInterval(timedown,1000);
//timedown();
//function timedown(){
//	var $outTime=new Date("2017/5/16 17:00:00");
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
////分享收藏
//var $show=$(".show");
//var $showshade=$(".show-shade");
//$show.hover(function(){
//	$showshade.css({"display":"block"});
//},function(){
//	$showshade.css({"display":"none"});
//})
////热门团购 换一组
//var $change=$(".change");
//var $grouplist=$(".group-list");
//var $ind=0;
//$change.click(function(){
//	$ind++;
//	if($ind>$grouplist.length-1){
//		$ind=0;
//	}
//	$grouplist.eq($ind).addClass("group-list-first").siblings().removeClass("group-list-first");
//})
////商品详情tab切换
//var $zstabullist=$(".zs_tab_ul li");
//var $zscontainer=$(".zs_container");
//var $zstabli=$(".zs_tab_li");
//var $zstabli1=$(".zs_tab_li1");
//var $sideulul=$(".side_right_c ul");
//var $ind1=0;
//$zstabli.click(function(){
//	var $this=$(this).index();
//	$(this).addClass("cur").siblings().removeClass("cur");
//	$zscontainer.eq($this).addClass("zs_container_first").siblings().removeClass("zs_container_first")
//})
//$zstabli1.click(function(){
//	if($ind1>1){
//		$ind1=0;
//	}
//	$sideulul.eq($ind1).addClass("side_ul_first").siblings().removeClass("side_ul_first");
//	$ind1++;
//})
////加入购物车-关闭
//var $zsclose=$(".zs-close");
//var $zslayerbox=$(".zs-layer-box");
//var $storebuy=$(".store-buy");
//$storebuy.click(function(){
//	$zslayerbox.css({"display":"block"});
//})
//$zsclose.click(function(){
//	$zslayerbox.css({"display":"none"});
//})


////地区选择
//var $freightarea=$(".freight-area");
//var $areaname=$(".area-name");
//var $selecttabli=$(".select-tab li");
////地区三级联动
//var $province=$(".area-listall");
//var $proa=$(".area-listall a");
//var $area=$(".area-list-area");
//var $selcur=$(".select-cur");
//
//$freightarea.hover(function(){
//	$areaname.addClass("area-cur");
//	$(".area-nameselect").css({"display":"block"});
//},function(){
//	$areaname.removeClass("area-cur");
//	$(".area-nameselect").css({"display":"none"});
//})
//$selecttabli.click(function(){
//	$(this).addClass("select-cur").siblings().removeClass("select-cur");
//	$province.eq($(this).index()).addClass("a-list").siblings().removeClass("a-list");
//})
//
//var $selcurspan=$(".select-cur span");
//var $pro=[{"name":1,"por":"北京"},{"name":2,"por":"上海"},{"name":3,"por":"安徽"},{"name":4,"por":"浙江"},{"name":5,"por":"天津"},{"name":6,"por":"重庆"},{"name":7,"por":"黑龙江"},{"name":4,"por":"长沙"},];
//var $a_pro="<a href='javascript:;'>北京</a>";
//for(var i=0;i<$pro.length;i++){
//	$a_pro+="<a href='javascript:;' prov='"+$pro[i].name+"'>"+$pro[i].por+"</a>";
//}
//$province.html($a_pro);
//
//$proa.click(function(){
//	var $this=$(this).index();
//	$selcurspan.html("才");
//})
//var $area = {
//	"1" : ["朝阳区","海淀区","昌平区","房山区","怀柔区"],
//	"2" : ["宝山区","浦东新区","万全区","奉贤区","闵行区"],
//	"3" : ["白云区","越秀区","台湾区","荔湾区","番禺区"],
//	"4" : ["3021","3022","3023","3024","3025"],
//	"5" : ["3031","3032","3033","3034","3035"],
//	"6" : ["1","2","3","4","5"],
//	"7" : ["朝阳区","海淀区","昌平区","房山区","怀柔区"],
//	"8" : ["宝山区","浦东新区","万全区","奉贤区","闵行区"]
//}
//$province.change(function(){
//	var val=$(this).test();
//	var $a_pro="<a href='javascript:;'>用哪个</a>";
//	for(var i=0;i<$area[val].length;i++){
//		$a_pro+="<a href='javascript:;'>"+$area[val][i]+"</a>";
//	}
//	$area.innerHTML=$a_pro;
//})

////加入购物车数量
//var $decrease=$(".zs-decrease");
//var $increase=$(".zs-increase");
//var $number=$("#zp-goods-number");
//var $val=$number.val();
//$decrease.click(function(){
//	$val==1 || $val--;
//	$number.val($val);
//})
//$increase.click(function(){
//	$val==20 || $val++;
//	$number.val($val);
//})
//
var $phonecode=$(".phone-purchase");
hide($phonecode,$(".code"));
////吸顶盒
//var $zstab=$(".zs_tab")
//var $zstabTop=$(".zs_tab").offset().top;
//var $zsbuybtn=$(".zs_buy_btn");
//$(window).scroll(function(e){
//	e=e||event;
//	if(getScroll()>=$zstabTop){
//		$zstab.addClass("fixed");
//		$zsbuybtn.css({"display":"block"});
//	}else if(getScroll()<=$zstabTop){
//		$zstab.removeClass("fixed");
//		$zsbuybtn.css({"display":"none"})
//	}
//})
//function getScroll(){
//	return document.documentElement.scrollTop||document.body.scrollTop;
//}
////right吸顶
//$sideright=$(".zs_side_right");
//$siderightTop=$(".zs_side_right").offset().top;
//$(window).scroll(function(e){
//	e=e||event;
//	if(getScroll()>=$siderightTop){
//		$sideright.addClass("right_fixed");
//	}else if(getScroll()<=$zstabTop){
//		$sideright.removeClass("right_fixed");
//	}
//})

////右定位 鼠标滑过显示
//var $fixed_right_top_li=$(".fixed_right_top li");
//var $fixed_right_top_a=$(".fixed_right_top a");
//var $fixed_right_top_hide=$(".fixed_right_top span");
//var $fixed_right_ico_index=0;
//$fixed_right_top_li.hover(function(){
//	$fixed_right_ico_index=$(this).index();
//	$fixed_right_top_a.eq($fixed_right_ico_index).addClass("fixed_color").siblings().removeClass("fixed_color");
//	$fixed_right_top_hide.eq($fixed_right_ico_index).animate({"right":"37"},400);
//},function(){
//	$fixed_right_top_a.eq($fixed_right_ico_index).removeClass("fixed_color");
//	$fixed_right_top_hide.eq($fixed_right_ico_index).animate({"right":"-100px"},10);
//	
//})
////返回顶部
//var $collBack=$(".collBack");
//var timer=null;
//clearInterval(timer);
//$collBack.click(function(){
//	timer=setInterval(collBack,14);
//	var $index=100;
//	function collBack(){
//		document.body.scrollTop-=$index;
//		if(document.body.scrollTop<=0){
//			document.body.scrollTop=0;
//			clearInterval(timer);
//		}
//	}
//})
module.exports=$;