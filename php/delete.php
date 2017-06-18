<?php
	//开启session回话
	session_start();
	//$_SESSION变量存入空的数组
	$_SESSION=array();
	//销毁回话内容
	session_destroy();
	//页面跳转
	$url="http://127.0.0.1/zol_gnn/index.html";
	echo "<script>";
	echo "window.location.href='$url'";
	echo "</script>";
?>