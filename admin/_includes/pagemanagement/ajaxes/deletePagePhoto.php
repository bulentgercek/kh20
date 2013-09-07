<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PhotoID = post("PhotoID", true);
		$sorgu = sorgula("SELECT * FROM pagephotos WHERE PhotoID = '$PhotoID'");
		if(mysql_affected_rows()){
			$gelen = gelen($sorgu);
			unlink("../../../../".$gelen["PhotoPath"]);
			unlink("../../../../".$gelen["PhotoTHPath"]);
			$sorgu = sorgula("DELETE FROM pagephotos WHERE PhotoID = '$PhotoID' ");
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>