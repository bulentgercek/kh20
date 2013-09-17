<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$LangID = session("SMLID");

		$sorgu = sorgula("SELECT * FROM slides WHERE LangID = '$LangID'");
		if(mysql_affected_rows()){
			while($gelen = gelen($sorgu)){
				unlink("../../../../".$gelen["SlidePath"]);
				unlink("../../../../".$gelen["SlideTHPath"]);
			}
			$sorgu = sorgula("DELETE FROM slides WHERE LangID = '$LangID'");
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>