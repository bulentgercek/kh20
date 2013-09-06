<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PageID = post("PageID", true);
		$sorgu = sorgula("SELECT * FROM pages WHERE SubPageID = '$PageID' ORDER BY PageStatus = 1 DESC, PageOrder");
		if(mysql_affected_rows()){
			while($sayfa = gelen($sorgu)){
				echo '<li id="listItem_'.ss($sayfa["PageID"]).'"><img src="_images/arrow.png" alt="move" width="12" height="12" class="handle" />'.ss($sayfa["PageTitle"]).'</li>';
			}
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>