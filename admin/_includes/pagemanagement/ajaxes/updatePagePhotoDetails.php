<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PhotoID = post("PhotoID",true);
		$PhotoName = post("PhotoName", true);
		$PhotoDescription = post("PhotoDescription", true);

		$isThere = sorgula("SELECT * FROM pagephotos WHERE PhotoID = '$PhotoID'");
		if(mysql_affected_rows()){
			$update = sorgula("UPDATE pagephotos SET PhotoName = '$PhotoName', PhotoDescription = '$PhotoDescription' WHERE PhotoID = '$PhotoID'");
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