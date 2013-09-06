<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["ShowSubPagesPageTitle"]; ?></h2>
<div id="InfoPageManagement" class="ucPopup"><h3></h3><p></p></div>
<div class="n_warning" style="display: block !important; margin-bottom: 5px; width: 700px; margin-left: 10px;"><p><?php echo $adminlang["msgPageFilter"]; ?></p></div>
<div class="main">
	<select name="FilterPage" id="FilterPage">
		<option value='EMPTY'>--- Ana Sayfa Seçiniz ---</option>
		<?php
		function getSubPages($subid = 0, $string = 1, $DilID){
				$sorgu = sorgula("SELECT PageID, PageTitle FROM pages WHERE SubPageID = '$subid' AND LangID = '$DilID' ORDER BY PageStatus = 1, PageOrder");
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
	<?php
		$dilkodu = session("SMLID");
		$sorgu = sorgula("SELECT * FROM pages WHERE SubPageID != 0 AND LangID = '$dilkodu' ORDER BY PageStatus = 1, PageOrder");
		if(mysql_affected_rows()){
	?>
	<table id="Sayfalar">
		<tr class="title">
			<th style="width: 50%;"><?php echo $adminlang["PageTitle"]; ?></th>
			<th><?php echo $adminlang["PageAddTime"]; ?></th>
			<th><?php echo $adminlang["Status"]; ?></th>
			<th><?php echo $adminlang["Transactions"]; ?></th>
		</tr>
		<?php
			while($gelen = gelen($sorgu)){
		?>
		<tr id='<?php echo ss($gelen["PageID"]); ?>'>
			<td>
				<?php
					if (ss($gelen["PageIsStatic"]) == 1) {
						echo '<strong style="color: darkblue;">'.ss($gelen["PageTitle"]).'</strong>';
					}else{
						echo ss($gelen["PageTitle"]);
					}
				 ?>
			</td>
			<td class="textcenter"><?php echo ss($gelen["PageAddTime"]); ?></td>
			<td class="textcenter">
				<?php
					$durum = ss($gelen["PageStatus"]);
					if ($durum == 1) {
					?>
					<a onclick="$.changePageStatus('<?php echo ss($gelen["PageID"]); ?>');" href="javascript:void();" class="table-icon visible" title='<?php echo $adminlang["OnOffline"]; ?>'></a>
					<?php
					}else {
					?>
					<a onclick="$.changePageStatus('<?php echo ss($gelen["PageID"]); ?>');" href="javascript:void();" class="table-icon invisible" title='<?php echo $adminlang["OnOffline"]; ?>'></a>
					<?php
					}
				?>
			</td>
			<td class="textcenter">
				<a href="?zone=pagemanagement&do=editpage&id=<?php echo $gelen["PageID"]; ?>" class="table-icon edit" title='<?php echo $adminlang["Edit"]; ?>'></a>
				<?php if($gelen["PageIsStatic"] == 1){}else{ ?>
					<a onclick="$.deletePage('<?php echo $adminlang["msgDeletePage"]; ?>','<?php echo ss($gelen["PageID"]); ?>');" href="javascript:void();" class="table-icon delete" title='<?php echo $adminlang["Delete"]; ?>'></a>
				<?php } ?>
			</td>
		</tr>
		<?php } ?>
	</table>
	<?php
		}else{
			bilgi(2,mesaj("kay覺tl覺 bir sayfa"));
		}
	?>
</div>
