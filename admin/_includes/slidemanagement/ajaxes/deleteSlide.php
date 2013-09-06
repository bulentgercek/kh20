<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$SlideID = post("SlideID", true);
		$sorgu = sorgula("SELECT * FROM slides WHERE SlideID = '$SlideID'");
		if(mysql_affected_rows()){
			$gelen = gelen($sorgu);
			unlink("../../../../".$gelen["SlidePath"]);
			unlink("../../../../".$gelen["SlideTHPath"]);
			$sorgu = sorgula("DELETE FROM slides WHERE SlideID = '$SlideID' ");
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>