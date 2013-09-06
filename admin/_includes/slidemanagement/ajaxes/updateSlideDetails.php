<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$SlideID = post("SlideID",true);
		$SlideTitle = post("SlideTitle", true);
		$SlideDescription = post("SlideDescription", true);

		$isThere = sorgula("SELECT * FROM slides WHERE SlideID = '$SlideID'");
		if(mysql_affected_rows()){
			$update = sorgula("UPDATE slides SET SlideTitle = '$SlideTitle', SlideDescription = '$SlideDescription' WHERE SlideID = '$SlideID'");
			if(mysql_affected_rows()){
				echo "OK";
			}
		}else{
			echo "HATA";
		}

	}else{
		echo "HOP!";
	}
 ?>