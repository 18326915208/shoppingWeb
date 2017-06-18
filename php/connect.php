<?php
	header("Content-Type:text/html;charset=utf-8");
	//关联服务器
	@mysql_connect("localhost","root","123456") or die("服务器连接失败");
	//连接数据库
	@mysql_select_db("test") or die("数据库连接失败");
	//设置编码格式
	@mysql_query("set names 'utf8'");
?>