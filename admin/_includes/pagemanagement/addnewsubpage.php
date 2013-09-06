<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
?>
<h2 class="title"><?php echo $adminlang["AddNewSubPageTitle"];?></h2>
<div id="InfoPageManagement" class="ucPopup"><h3></h3><p></p></div>
<div class="n_warning" style="display: block !important; margin-bottom: -10px; width: 700px; margin-left: 10px;"><p><?php echo $adminlang["msgSelectMainPage"]; ?></p></div><br>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo URL."admin/index.php?zone=pagemanagement&do=showsubpages"; ?>'/>
		<strong>Üst Sayfa: </strong>
		<select name="SubPageID">
			<option value="HOP" selected>--- Lütfen Ana Sayfa Seçiniz ---</option>
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
		</select><br><br>
		<p><strong><?php echo $adminlang["PageTitle"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="PageTitle" id="PageTitle" value=""><br>
		<p><strong><?php echo $adminlang["PageSummary"];?></strong></p>
		<textarea name="PageSummary" id="PageSummary" rows="3"></textarea><br>
		<p><strong><?php echo $adminlang["PageContent"];?></strong></p>
		<textarea name="PageContent" id="PageContent" rows="5" class="Editor"></textarea><br>
		<p><strong><?php echo $adminlang["PageDescription"];?></strong></p>
		<textarea name="PageDescription" id="PageDescription" rows="5"></textarea>
		<p><span class="gray size10"><?php echo $adminlang["msgMetaDescription"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["PageKeywords"];?></strong></p>
		<input type="text" name="PageKeywords" id="PageKeywords" value="">
		<p><span class="gray size10"><?php echo $adminlang["msgMetaKeywords"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["PageStatus"];?></strong></p>
		<select name="PageStatus">
			<option value="0"><?php echo $adminlang["Offline"];?></option>
			<option value="1" selected><?php echo $adminlang["Online"];?></option>
		</select>
		<input type="submit" id="SubmitAddNewSubPage" name="SubmitAddNewSubPage" value='<?php echo $adminlang["SavePage"];?>' class="okay">
	</form>
</div>