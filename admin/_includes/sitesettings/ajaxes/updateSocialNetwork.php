<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$Facebook = post("Facebook", true);
		$Twitter = post("Twitter", true);
		$Google = post("Google", true);
		$Pinterest = post("Pinterest", true);

		$update = sorgula("UPDATE socialnetwork SET
		Facebook = '$Facebook',
		Twitter = '$Twitter',
		Google = '$Google',
		Pinterest = '$Pinterest'
		");

		if($update){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP DEDİK!";
	}

 ?>