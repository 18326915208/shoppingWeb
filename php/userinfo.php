<?php
	session_start();
	header("Content-Type:text/html;charset=utf-8");
	include("./connect.php");
	@$status=$_POST["status"];
	@$username=$_POST["username"];
	@$password=$_POST["password"];
	@$regname="/^1[345789]\d{9}$/";
	@$regpwd="/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/";
	switch($status){
//		case "register":
//			if( empty($username) && empty($password) ){
//				exit(json_encode(0));//0账号为空
//			}
//			if( preg_match($regname, $username) && preg_match($regpwd, $password) ){
//				$sql="SELECT * FROM `register` WHERE username='$username' ";
//				$query=mysql_query($sql);
//				$num=mysql_num_rows($query);
//				if($num>0){
//					exit(json_encode(1));//1用户名存在
//				}else{
//					$sql="INSERT INTO `register`(`id`, `username`, `password`) VALUES (null,'$username','$password')";
//					mysql_query($sql);
//					exit(json_encode(2));//注册成功
//				}
//			}
//			break;
			
			case "register":
			if( !empty($username)&& !empty($password)){   //empty()
				@$sql="SELECT * FROM `register` WHERE username='$username' ";
				@$reg=mysql_query($sql);
				@$row = mysql_fetch_row($reg);
				if( $row > 0 ){
					exit(json_encode(1));//用户名存在
				}
				else{
					$sqlIn="INSERT INTO `register`(`id`, `username`, `password`) VALUES (null,'$username','$password')";
					mysql_query($sqlIn);
					exit(json_encode(2));//注册成功
				}
			}else{
				exit(json_encode(0));//0账号为空
			}
		break;
			
		case "login":
			if( empty($username) && empty($password) ){
				exit(json_encode(0));//0账号为空
			}
			if( preg_match($regname, $username) && preg_match($regpwd, $password)){
				$sqlname="select username from `register` where username='$username' ";
				$sqlpwd="select password from `register` where password='$password' ";
				$queryname=mysql_query($sqlname);
				$querypwd=mysql_query($sqlpwd);
				$namearr=mysql_fetch_array($queryname);
				$pwdarr=mysql_fetch_array($querypwd);
				if( $namearr && is_array($namearr) && !empty($namearr)){
					if($pwdarr["password"]==$password){
						$_SESSION["username"]=$username;
						exit(json_encode(2));//登录成功
					}else{
						exit(json_encode(3));//密码错误
					}
				}else{
					exit(json_encode(1));//账号不存在
				}
			}
			break;
	}
?>