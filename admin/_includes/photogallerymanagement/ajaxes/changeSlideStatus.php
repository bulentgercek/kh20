<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$SlideID = post("SlideID", true);
		$sorgu = sorgula("SELECT * FROM slides WHERE SlideID = '$SlideID'");
		if(mysql_affected_rows()){
			$foto = gelen($sorgu);
			if($foto["SlideStatus"] == 1){ sorgula("UPDATE slides SET SlideStatus = 0 WHERE SlideID = '$SlideID'"); }
			else{ sorgula("UPDATE slides SET SlideStatus = 1 WHERE SlideID = '$SlideID'"); }
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>

