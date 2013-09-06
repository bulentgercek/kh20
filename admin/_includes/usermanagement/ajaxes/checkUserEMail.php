<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$UserEMail = post("UserEMail", true);
		$sorgu = sorgula("SELECT UserEMail FROM users WHERE UserEMail = '$UserEMail' ");
		if(mysql_affected_rows()){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP!";
	}
 ?>