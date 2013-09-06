<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$UserName = post("UserName", true);
		$sorgu = sorgula("SELECT UserName FROM users WHERE UserName = '$UserName' ");
		if(mysql_affected_rows()){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>