var webpack=require('webpack');
module.exports = {
	entry:  __dirname + "/js/main.js",//已多次提及的唯一入口文件
	output: {
	    path: __dirname + "/public",//打包后的文件存放的地方
	    filename: "index.js"//打包后输出文件的文件名
	}
}

module.exports = {
	entry:  __dirname + "/js/helprequire.js",//已多次提及的唯一入口文件
	output: {
	    path: __dirname + "/public",//打包后的文件存放的地方
	    filename: "helpcenter.js"//打包后输出文件的文件名
	}
}
//module.exports = {
//	entry:  __dirname + "/js/loginrequire.js",//已多次提及的唯一入口文件
//	output: {
//	    path: __dirname + "/public",//打包后的文件存放的地方
//	    filename: "login.js"//打包后输出文件的文件名
//	}
//}
module.exports = {
	entry:  __dirname + "/js/register_require.js",//已多次提及的唯一入口文件
	output: {
	    path: __dirname + "/public",//打包后的文件存放的地方
	    filename: "register.js"//打包后输出文件的文件名
	}
}
//module.exports = {
//	entry:  __dirname + "/js/daojishi_require.js",//已多次提及的唯一入口文件
//	output: {
//	    path: __dirname + "/public",//打包后的文件存放的地方
//	    filename: "daojishi.js"//打包后输出文件的文件名
//	}
//}

//module.exports = {
//	entry:  __dirname + "/js/single-require.js",//已多次提及的唯一入口文件
//	output: {
//	    path: __dirname + "/public",//打包后的文件存放的地方
//	    filename: "single.js"//打包后输出文件的文件名
//	}
//}

//module.exports = {
//	entry:  __dirname + "/js/detail_require.js",//已多次提及的唯一入口文件
//	output: {
//	    path: __dirname + "/public",//打包后的文件存放的地方
//	    filename: "detailpage.js"//打包后输出文件的文件名
//	}
//}
//module.exports = {
//	entry:  __dirname + "/js/conformorder-require.js",//已多次提及的唯一入口文件
//	output: {
//	    path: __dirname + "/public",//打包后的文件存放的地方
//	    filename: "conform.js"//打包后输出文件的文件名
//	}
//}
//
//module.exports = {
//	entry:  __dirname + "/js/paymoney-require.js",//已多次提及的唯一入口文件
//	output: {
//	    path: __dirname + "/public",//打包后的文件存放的地方
//	    filename: "paymoney.js"//打包后输出文件的文件名
//	}
//}