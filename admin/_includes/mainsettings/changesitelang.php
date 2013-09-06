<?php

	if($_POST){

		require_once("../../../config/config.php");
		require_once("../../../config/system.php");

		$LangID = post("LangID", true);
		$sorgu = sorgula("SELECT LangShortName FROM languages WHERE LangID = '$LangID' ");
		if(mysql_affected_rows()){
			$gelendil = gelen($sorgu);
			$_SESSION["SML"] = $gelendil["LangShortName"];
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
?>