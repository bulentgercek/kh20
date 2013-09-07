<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PageID = post("PageID", true);
		$sorgu = sorgula("SELECT * FROM pagephotos WHERE PageID = '$PageID'");
		if(mysql_affected_rows()){
			while($gelen = gelen($sorgu)){
				unlink("../../../../".$gelen["PhotoPath"]);
				unlink("../../../../".$gelen["PhotoTHPath"]);
			}
			$sorgu = sorgula("DELETE FROM pagephotos WHERE PageID = '$PageID' ");
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>