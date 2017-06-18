var $=require("jquery");
//nav
var $navcenH3=$(".nav_cen h3");
var $navlistli=$(".nav-list li");
var $menulist=$(".menu-list");
$navlistli.click(function(){
	var $this=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$menulist.css({"display":"none"});
});
$navlistli.first().click(function(){
	$menulist.css({"display":"block"});
	$navcenH3.find("i").css({"display":"none"});
});
module.exports=$;