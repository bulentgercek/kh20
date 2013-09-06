<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$UserFullName = post("UserFullName", true);
		$UserName = post("UserName", true);
		$UserPassword = post("UserPassword", true);
		$UserEMail = post("UserEMail", true);
		$UserRole = post("UserRole", true);

		$insert = sorgula("INSERT INTO users SET
				UserFullName = '$UserFullName',
				UserName = '$UserName',
				UserPassword = '$UserPassword',
				UserEMail = '$UserEMail',
				UserRole = '$UserRole',
				UserIsActive = 1
				");

		if(mysql_affected_rows()){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP!";
	}
 ?>