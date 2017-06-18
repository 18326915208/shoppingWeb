var $=require("jquery");
//倒计时
var $day=$(".day");
var $hour=$(".hour");
var $min=$(".minute");
var $sec=$(".second");
var timesd=null;
timesd=setInterval(timedown,1000);
timedown();
function timedown(){
	var $outTime=new Date("2017/5/20 17:00:00");
	var $nowTime=new Date();
	var $time=$outTime.getTime()-$nowTime.getTime();
	var $days= parseInt( $time / 1000 /60 /60 / 24 );
	var $hours=parseInt($time/1000/60/60-($days*24));
	var $mins=parseInt($time/1000/60%60);
	var $secs=parseInt($time/1000%60);
	if($time<=0){
		$days = 0;
		$hours=0;
		$mins=0;
		$secs=0;
		clearInterval(timesd);
	}
	$day.html($days);
	$hour.html(t($hours));
	$min.html(t($mins));
	$sec.html(t($secs));
}
function t(n){
	if(n<10){
		n="0"+n;
	}
	return n;
}
module.exports=$;