<?php
	session_start();
	header("Content-Type:text/html;charset=utf-8");
	//判断是否设置了session
	if(isset($_SESSION["username"])){
		echo $_SESSION["username"];
	}else{
		echo json_encode(0);//0代表未登录
	}
?>