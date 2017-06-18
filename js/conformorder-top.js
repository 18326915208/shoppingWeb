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
module.exports=$;