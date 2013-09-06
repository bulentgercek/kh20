<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$LangID = post("LangID", true);
		$sorgu = sorgula("SELECT * FROM languages WHERE LangID = '$LangID'");
		if(mysql_affected_rows()){
			$lang = gelen($sorgu);
			if($lang["LangStatus"] == 1){ sorgula("UPDATE languages SET LangStatus = 0 WHERE LangID = '$LangID'"); }
			else{ sorgula("UPDATE languages SET LangStatus = 1 WHERE LangID = '$LangID'"); }
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>

