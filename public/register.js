/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $=__webpack_require__(2);
//注册
var $registerbtn=$(".register-btn");
var $text=$(".text");
var $wrong=$(".wrong-tips");
var $wrongpgone=$(".wrong_phone");
var $wrongcode=$(".wrong_code");
var $right=$(".right-tips");
var $right1=$(".right-tips1");
var $right2=$(".right-tips2");
var $right3=$(".right-tips3");
var $phone=$(".phone");
$text.focus(function(){
	$(this).css({"border-color":"#c00"});
})
$text.blur(function(){
	$(this).css({"border-color":"#ccc"});
})
//手机号验证
$phone.blur(function(){
	var val=$phone.val();
	var reg=/^1[345789]\d{9}$/;
	if(!reg.test(val)){
		$wrongpgone.text("请填写正确的手机号码");
		$wrongpgone.css({"display":"block"});
		$right.css({"display":"none"});
	}else{
		$wrongpgone.text("");
		$wrongpgone.css({"display":"none"});
		$right.css({"display":"block"});
	}
})
//图片验证
var $captchachange=$(".captcha-change");
var $captchaimg=$(".captcha-img");
var $inpcode=$(".inp_code");
$inpcode.blur(function(){
	var val=$inpcode.val();
	var valcode=$captchaimg.text();
	if(val.toLocaleLowerCase()==valcode.toLocaleLowerCase()){
		$wrongcode.text("");
		$wrongcode.css({"display":"none"});
		$right1.css({"display":"block"});
	}else{
		$wrongcode.text("请填写验证码");
		$right1.css({"display":"none"});
		$wrongcode.css({"display":"block"});
	}
})
$captchachange.click(function(){
	randoms();
})
randoms();
function randoms(){
	var str="";
	var arr=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
	for(var i=0;i<4;i++){
		str+=arr[parseInt(Math.random()*arr.length)];
	}
	$captchaimg.text(str);
}
//短信验证码
var $massage=$(".massage");
var $wrongmassage=$(".wrong_massage");
$massage.blur(function(){
	var val=$massage.val();
	var reg=/^\d{6}$/;
	if(!reg.test(val)){
		$wrongmassage.text("请填写六位数字验证码");
		$right2.css({"display":"none"});
		$wrongmassage.css({"display":"block"});
	}else{
		$wrongmassage.text("");
		$right2.css({"display":"block"});
		$wrongmassage.css({"display":"none"});
	}
})
//密码验证
var $pwd=$(".pwd");
var $wrongpwd=$(".wrong_pwd");
$pwd.blur(function(){
	var val=$pwd.val();
	var reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/;
	if(!reg.test(val)){
		$wrongpwd.text("密码必须由6-16个英文字母和数字的字符串组成！");
		$wrongpwd.css({"display":"block"});
	}else{
		$wrongpwd.text("");
		$wrongpwd.css({"display":"none"});
	}
})
//确认密码
var $pwd2=$(".pwd2");
var $wrongpwd2=$(".wrong_pwd2");
$pwd2.blur(function(){
	if($pwd.val()==$pwd2.val() &&$pwd2.val()!=""){
		$wrongpwd2.text("");
		$wrongpwd2.css({"display":"none"});
		$right3.css({"display":"block"});
	}else{
		$wrongpwd2.text("请填写确认密码");
		$wrongpwd2.css({"display":"block"});
		$right3.css({"display":"none"});
	}
})
$registerbtn.click(function(){
	console.log(55555555555555555)
	$.ajax({
		type:"post",
		url:"http://127.0.0.1/zol_gnn/php/userinfo.php",
		data:"status=register&username="+$phone.val()+"&password="+$pwd.val()+" ",
		success:function(res){
			console.log(res);
			if(res==0){
				alert("账号密码不能为空");
			}else if(res==1){
				alert("该账号已注册");
			}else if(res==2){
				alert("注册成功");
				location.href="http://127.0.0.1/zol_gnn/login.html";
			}
			else{
				console.log(111111111);
			}
		}
	});
})
module.exports=$;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: E:\\hbuilder\\zol_gnn\\node_modules\\._jquery@3.2.1@jquery\\dist\\jquery.js The keyword 'undefined' is reserved (253:25)\nYou may need an appropriate loader to handle this file type.\n| \n| \t\t\t\t// Don't bring in undefined values\n| \t\t\t\t} else if ( copy !== undefined ) {\n| \t\t\t\t\ttarget[ name ] = copy;\n| \t\t\t\t}");

/***/ })
/******/ ]);