<?php
//	include("./connect.php");
//	header("Content-Type:text/html;charset='utf-8'");
//	$page=0;
//	$pageNum=10;
//	if(@$_POST["page"]){
//		$page=$_POST["page"];
//	}
//	if(@$_POST["pageNum"]){
//		$pageNum=$_POST["pageNum"];
//	}
//	$sql="SELECT * FROM `goods` LIMIT $page,$pageNum";
//	$query=mysql_query($sql);
//	$ass=mysql_fetch_assoc($query);
//	$arr=array();
//	$i=0;
//	while($ass==mysql_fetch_assoc($query)){
//		$arr[$i]=$ass;
//		$i++;
//	}
//	echo json_encode(array("dataList"=>$arr));
//	mysql_free_result($query);//释放数据
//	mysql_close();
	header("Content-Type:text/html;charset='utf-8'");
	$con=mysqli_connect("localhost","root","123456","test");
	mysqli_query($con,"set names 'utf8'");
	$sql="select * from goods";
	$rest = $con->query($sql);
    $arr = array();
    if($rest->num_rows > 0){
        while($row = $rest->fetch_assoc()){
            $arr[] = $row;
        }
    }
    echo json_encode($arr);
	
?>