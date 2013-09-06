<?php
	// echo !defined("KOYBASI") ? die("Hop dedik!") : null;

	require_once("../../config/config.php");
	require_once("../../config/system.php");

	$kullaniciAdi = post("username");
	$sifre = post("password");


	$sorgu = sorgula("SELECT * FROM users WHERE UserName = '$kullaniciAdi' && UserPassword = '$sifre'");
	if(mysql_affected_rows()){
		$user = gelen($sorgu);

		$sorgu2 = sorgula("UPDATE users SET UserLastLogin = NOW() WHERE UserID ='".$user["UserID"]."'");
		$session = array(
		"Login" => true,
		"UserID" => $user["UserID"],
		"UserFullName" => $user["UserFullName"],
		"UserName" => $user["UserName"],
		"UserLastLogin" => $user["UserLastLogin"],
		"UserEMail" => $user["UserEMail"],
		"UserRole" => $user["UserRole"]
		);
		sessionBaslat($session);
		echo "OKAY";
	}else{
		echo "HATA";
	}
?>