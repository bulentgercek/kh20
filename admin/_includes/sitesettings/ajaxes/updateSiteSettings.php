<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$SiteTitle = post("SiteTitle", true);
		$SiteURL = post("SiteURL", true);
		$SiteDescription = post("SiteDescription", true);
		$SiteKeywords = post("SiteKeywords", true);
		$SiteStatus = post("SiteStatus", true);
		$LangID = session("SMLID");

		$update = sorgula("UPDATE sitesettings SET
			SiteTitle = '$SiteTitle',
		 	SiteURL = '$SiteURL',
		 	SiteDescription = '$SiteDescription',
		 	SiteKeyWords = '$SiteKeywords',
		 	SiteStatus = '$SiteStatus' WHERE LangID = '$LangID'
	 	");

		if($update){
			echo "OKAY";
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP DEDİK!";
	}
 ?>