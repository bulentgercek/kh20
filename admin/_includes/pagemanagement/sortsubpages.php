<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["SortSubPagesPageTitle"]; ?></h2>
<div class="n_warning" style="display: block !important; margin-bottom: 5px; width: 700px; margin-left: 10px;"><p><?php echo $adminlang["msgPageFilter"]; ?></p></div>
<div class="main">
	<select name="FilterPage2" id="FilterPage2">
		<option value='EMPTY'>--- Ana Sayfa Seçiniz ---</option>
		<?php
		function getSubPages($subid = 0, $string = 1, $DilID){
				$sorgu = sorgula("SELECT PageID, PageTitle FROM pages WHERE SubPageID = '$subid' AND LangID = '$DilID' ORDER BY PageOrder");
				if(mysql_affected_rows()){
					while($gelen = gelen($sorgu)){
		?>
			<option value='<?php echo $gelen["PageID"]; ?>'><?php echo str_repeat('--', $string).' '.$gelen["PageTitle"]; ?></option>
		<?php
				getSubPages($gelen["PageID"], $string + 1, session("SMLID"));
					}
				}else{
					return false;
				}
			}
			getSubPages(0,1,session("SMLID"));
		?>
	</select>
	<ul id="test-list" class="AltSayfalariSirala"></ul>
</div>
