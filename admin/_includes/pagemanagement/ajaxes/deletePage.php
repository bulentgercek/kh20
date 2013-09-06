<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PageID = post("PageID", true);
		$sorgu = sorgula("DELETE FROM pages WHERE PageID = '$PageID'");
		if(mysql_affected_rows()){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>