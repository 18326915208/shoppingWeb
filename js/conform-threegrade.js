var $=require("jquery");
//三级联动
var $sheng=$(".sheng");
var $city=$(".city");
var $area=$(".area");
var $opt="<option>省/市</option>";
var $provience=[{id:1,pro:"北京"},{id:2,pro:"上海"},{id:3,pro:"安徽省"},{id:4,pro:"浙江省"},{id:5,pro:"江苏"}];
for(var i=0;i<$provience.length;i++){
	$opt+="<option value='"+$provience[i].id+"'>"+$provience[i].pro+"</option>";
}
$sheng.html($opt);
var city={
	"1" : ["101#北京市","102#北京市2"],
	"2" : ["201#上海市","202#上海市2","203#上海市3333"],
	"3" : ["301#合肥市","302#黄山市","303#芜湖市","304#淮北市","305#滁州市","306#明光市","307#淮南市","308#阜阳市"],
	"4" : ["401#杭州市","402#绍兴市","403#温州市","404#嘉兴市","405#宁波市","406#湖州市","407#平湖市"],
	"5" : ["501#南京","502#苏州","503#扬州","504#徐州","505#连云港","506#盐城市","507#南通市"],
}
$sheng.change(function(){
	var val=$(this).val();
	console.log($(this).val());//1 2 3 4 5
	var opt="<option>市/县</option>";
	for(var i=0;i<city[val].length;i++){
		var split=city[val][i].split("#");
		opt+="<option value='"+split[0]+"'>"+split[1]+"</option>"
	}
	$city.html(opt);
})
var Area = {
	"101" : ["朝阳区","海淀区","昌平区","房山区","怀柔区"],
	"102" : ["11","22","33","44","55"],
	"201" : ["宝山区","浦东新区","万全区","奉贤区","闵行区"],
	"202" : ["上区","下区","左区","右区","前区"],
	"203" : ["黑区","白区","红区","黄区","蓝区"],
	"301" : ["白云区","越秀区","台湾区","荔湾区","番禺区"],
	"302" : ["3021","3022","3023","3024","3025"],
	"303" : ["3031","3032","3033","3034","3035"],
	"304" : ["aaaa","cccc","ssss","dddd","fffff"],
	"305" : ["qqqqqq","wwww","eeeee","2222","11"],
	"306" : ["wwwq","11","3","4","5"],
	"307" : ["112","21","3","4","5"],
	"308" : ["12","2c","3 z","4A","5z"],
	"401" : ["上城区","下城区","滨江区","拱墅区","西湖区","萧山区","余杭区","江干区富阳市","临安市"],
	"402" : ["3021","3022","3023","3024","3025"],
	"403" : ["上城区","下城区","滨江区","拱墅区","西湖区","萧山区","余杭区","江干区富阳市","临安市"],
	"404" : ["3021","3022","3023","3024","3025"],
	"405" : ["wwwq","11","3","4","5"],
	"406" : ["宝山区","浦东新区","万全区","奉贤区","闵行区"],
	"407" : ["上城区","下城区","滨江区","拱墅区","西湖区","萧山区","余杭区","江干区富阳市","临安市"],
	"501" : ["玄武区","白下区","秦淮区 ","建邺区","鼓楼区 ","浦口区"],
	"502" : ["3021","3022","3023","3024","3025"],
	"503" : ["玄武区","白下区","秦淮区 ","建邺区","鼓楼区 ","浦口区"],
	"504" : ["上城区","下城区","滨江区","拱墅区","西湖区","萧山区","余杭区","江干区富阳市","临安市"],
	"505" : ["qqqqqq","wwww","eeeee","2222","11"],
	"506" : ["wwwq","11","3","4","5"],
	"507" : ["上城区","下城区","滨江区","拱墅区","西湖区","萧山区","余杭区","江干区富阳市","临安市"]
}
$city.change(function(){
	var val=$(this).val();
	var opt="<option>县/区</option>";
	for(var i=0;i<Area[val].length;i++){
		opt+="<option>"+Area[val][i]+"</option>"
	}
	$area.html(opt);
})
module.exports=$;