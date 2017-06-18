var $=require("jquery");
//side轮播
var $lunbo=$("lunbo");
var $lunboca=$(".lunbo-c a");
var $lundotsp=$(".lun-dot span");
var $m=0;
var luntime=null;
$lunbo.hover(function(){
	clearInterval(luntime);
},function(){
	luntime=setInterval(lun,2000);
})
$lundotsp.mouseover(function(){
	var $this=$(this).index();
	$(this).addClass("lun-cur").siblings().removeClass("lun-cur");
	$lunboca.eq($this).addClass("luna1").siblings().removeClass("luna1");
	$m=$this;
})
clearInterval(luntime);
luntime=setInterval(lun,2000);
function lun(){
	$m++;
	if($m>$lundotsp.length){
		$m=0;
	}
	$lundotsp.eq($m).addClass("lun-cur").siblings().removeClass("lun-cur");
	$lunboca.eq($m).addClass("luna1").siblings().removeClass("luna1");
}
module.exports=$;