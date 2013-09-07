<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PhotoID = post("PhotoID", true);
		$sorgu = sorgula("SELECT * FROM pagephotos WHERE PhotoID = '$PhotoID'");
		if(mysql_affected_rows()){
			$foto = gelen($sorgu);
			if($foto["PhotoStatus"] == 1){ sorgula("UPDATE pagephotos SET PhotoStatus = 0 WHERE PhotoID = '$PhotoID'"); }
			else{ sorgula("UPDATE pagephotos SET PhotoStatus = 1 WHERE PhotoID = '$PhotoID'"); }
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>

