<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$LangID = session("SMLID");
		$SubPageID = post("SubPageID", true);
		$PageTitle = post("PageTitle", true);
		$PageSummary = post("PageSummary", true);
		$PageContent = post("PageContent", true);
		$PageDescription = post("PageDescription", true);
		$PageKeywords = post("PageKeywords", true);
		$PageStatus = post("PageStatus", true);
		$PageSefLink = sefLink($PageTitle);

		$isThere = sorgula("SELECT * FROM pages WHERE PageSefLink = '$PageSefLink'");
		if(mysql_affected_rows()){
			echo "SAMEPAGE";
		}else{
			$insert = sorgula("INSERT INTO pages SET
				LangID = '$LangID',
				SubPageID = '$SubPageID',
				PageTitle = '$PageTitle',
				PageSummary = '$PageSummary',
				PageContent = '$PageContent',
				PageDescription = '$PageDescription',
				PageKeywords = '$PageKeywords',
				PageSefLink = '$PageSefLink',
				PageStatus = '$PageStatus'
				");

			if(mysql_affected_rows()){
				echo "OKAY";
			}else{
				echo "HATA";
			}
		}

	}else{
		echo "HOP!";
	}
 ?>