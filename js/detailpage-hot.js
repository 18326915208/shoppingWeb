var $=require("jquery");
//热门团购 换一组
var $change=$(".change");
var $grouplist=$(".group-list");
var $ind=0;
$change.click(function(){
	$ind++;
	if($ind>$grouplist.length-1){
		$ind=0;
	}
	$grouplist.eq($ind).addClass("group-list-first").siblings().removeClass("group-list-first");
})
module.exports=$;