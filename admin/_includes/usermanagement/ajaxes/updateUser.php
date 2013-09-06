<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$UserID = post("UserID",true);
		$UserFullName = post("UserFullName", true);
		// $UserName = post("UserName", true);
		$UserPassword = post("UserPassword", true);
		$UserEMail = post("UserEMail", true);
		$UserRole = post("UserRole", true);

		$isThere = sorgula("SELECT * FROM users WHERE UserEMail = '$UserEMail' && UserID != '$UserID'");
		if(mysql_affected_rows()){
			echo "KAYITLIEPOSTA";
		}else{
			if($UserPassword == ""){
				$sorgu = "UPDATE users SET UserFullName = '$UserFullName', UserEMail = '$UserEMail', UserRole = '$UserRole' WHERE UserID = '$UserID'";
			}else if($UserEMail == ""){
				$sorgu = "UPDATE users SET UserFullName = '$UserFullName', UserPassword = '$UserPassword', UserRole = '$UserRole' WHERE UserID = '$UserID'";
			}else if($UserPassword == "" && $UserEMail == ""){
				$sorgu = "UPDATE users SET UserFullName = '$UserFullName', UserRole = '$UserRole' WHERE UserID = '$UserID'";
			}else{
				$sorgu = "UPDATE users SET UserFullName = '$UserFullName', UserPassword = '$UserPassword', UserEMail = '$UserEMail', UserRole = '$UserRole' WHERE UserID = '$UserID'";
			}
			$update = sorgula($sorgu);
			if(mysql_affected_rows()){
				echo "OKAY";
			}else{
				echo "HATA";
			}
		}
	}else{
		echo "HOP!";
	}
 ?>