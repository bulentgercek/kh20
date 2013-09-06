<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$UserID = post("UserID", true);
		$sorgu = sorgula("DELETE FROM users WHERE UserID = '$UserID'");
		if(mysql_affected_rows()){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>