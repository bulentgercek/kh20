<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");

		$PageID = post("PageID", true);
		$sorgu = sorgula("SELECT * FROM pages WHERE SubPageID = '$PageID' ORDER BY PageStatus = 1 DESC, PageOrder");
		if(mysql_affected_rows()){
			while($sayfa = gelen($sorgu)){
				echo '<tr id="'.ss($sayfa["PageID"]).'">';
				echo '<td>'.ss($sayfa["PageTitle"]).'</td>';
				echo '<td class="textcenter">'.ss($sayfa["PageAddTime"]).'</td>';
				echo '<td class="textcenter">';
				if(ss($sayfa["PageStatus"]) == 1){
					echo '<a onclick="$.changePageStatus(\''.ss($sayfa["PageID"]).'\');" href="javascript:void();" class="table-icon visible" title=\''.$adminlang["OnOffline"].'\'></a>';
				}else{
					echo '<a onclick="$.changePageStatus(\''.ss($sayfa["PageID"]).'\');" href="javascript:void();" class="table-icon invisible" title=\''.$adminlang["OnOffline"].'\'></a>';
				}
				echo '</td>';
				echo '<td class="textcenter">';
				echo '<a href="?zone=pagemanagement&do=editpage&id='.ss($sayfa["PageID"]).'" class="table-icon edit" title="'.$adminlang["Edit"].'"></a>';
				echo '<a onclick="$.deletePage(\''.$adminlang["msgDeletePage"].'\',\''.ss($sayfa["PageID"]).'\');" href="javascript:void();" class="table-icon delete" title="'.$adminlang["Delete"].'"></a>';
				echo '</td></tr>';
			}
		}else{
			echo "HATA";
		}
	}else{
		echo "HOP";
	}
 ?>