<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PageID = post("PageID", true);
		$LangID = post("LangID", true);
		$PageTitle = post("PageTitle", true);
		$PageSummary = post("PageSummary", true);
		$PageContent = post("PageContent", true);
		$PageDescription = post("PageDescription", true);
		$PageKeywords = post("PageKeywords", true);
		$PageStatus = post("PageStatus", true);
		$PageSefLink = sefLink($PageTitle);

		$isThere = sorgula("SELECT * FROM pages WHERE PageSefLink = '$PageSefLink' && PageID != '$PageID'");
		if(mysql_affected_rows()){
				echo "SAMEPAGE";
		}else{
			if(ss($sayfa["PageIsStatic"]) == 1){
				$update = sorgula("UPDATE pages SET
					LangID = '$LangID',
					PageSummary = '$PageSummary',
					PageContent = '$PageContent',
					PageDescription = '$PageDescription',
					PageKeywords = '$PageKeywords',
					PageLastEdit = NOW() WHERE PageID = '$PageID'
				");

				if($update){
					echo "OK";
				}else{
					echo "HATA";
				}
			}else{
				$update = sorgula("UPDATE pages SET
					LangID = '$LangID',
					PageTitle = '$PageTitle',
					PageSummary = '$PageSummary',
					PageContent = '$PageContent',
					PageStatus = '$PageStatus',
					PageDescription = '$PageDescription',
					PageKeywords = '$PageKeywords',
					PageSefLink = '$PageSefLink',
					PageLastEdit = NOW(),
					PageStatus = '$PageStatus' WHERE PageID = '$PageID'
				");

				if($update){
					echo "OK";
				}else{
					echo "HATA";
				}
			// }
		}
	}
	}else{
		echo "HOP!";
	}
 ?>