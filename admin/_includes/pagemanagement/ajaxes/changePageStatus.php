<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PageID = post("PageID", true);
		$sorgu = sorgula("SELECT * FROM pages WHERE PageID = '$PageID'");
		if(mysql_affected_rows()){
			$gelensayfa = gelen($sorgu);
			if($gelensayfa["PageStatus"] == 1){ sorgula("UPDATE pages SET PageStatus = 0 WHERE PageID = '$PageID'"); }
			else{ sorgula("UPDATE pages SET PageStatus = 1 WHERE PageID = '$PageID'"); }
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>

