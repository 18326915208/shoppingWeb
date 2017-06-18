var $=require("jquery");
var $navcenH3=$(".nav_cen h3");
var $navcenhi=$(".nav_cen h3 i");
var $navlistli=$(".nav-list li");
var $menulist=$(".menu-list");
$navcenH3.mouseover(function(){
	$menulist.css({"display":"block"});
	$navcenhi.addClass("hi1");
});
$navcenH3.mouseout(function(){
	$navcenhi.removeClass("hi1");
	$menulist.css({"display":"none"});
});
module.exports=$;