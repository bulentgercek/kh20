<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$sorgu = sorgula("SELECT PageProfilPhotoWidth, PageProfilPhotoHeight FROM othersettings");
	$bilgi = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["EditPagePageTitle"];?></h2>
<div id="InfoPageManagement" class="ucPopup"><h3></h3><p></p></div>
<?php
	$id = get("id");
	$sorgu = sorgula("SELECT * FROM pages WHERE PageID = '$id'");
	if(mysql_affected_rows() < 1){
		yonlendir(URL."admin/index.php?zone=pagemanagement&do=showpages");
		exit;
	}
	$sayfa = gelen($sorgu);
 ?>
<div class="main">
	<form id="UpdatePageWPhoto" action="_includes/pagemanagement/ajaxes/updatePageWPhoto.php" method="post" enctype="multipart/form-data" onsubmit="return false">
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo $_SERVER["HTTP_REFERER"]; ?>'/>
		<input type="hidden" name="RefererPageID" id="RefererPageID" value='<?php echo $sayfa["PageID"]; ?>'/>
		<input type="hidden" name="Width" id="Width" value='<?php echo PPP_W; ?>'/>
		<input type="hidden" name="Height" id="Height" value='<?php echo PPP_H; ?>'/>
		<p><strong><?php echo $adminlang["PageTitle"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="PageTitle" id="PageTitle" value='<?php echo $sayfa["PageTitle"]; ?>'><br>
		<p><strong><?php echo $adminlang["PageSummary"];?></strong></p>
		<textarea name="PageSummary" id="PageSummary" rows="3"><?php echo $sayfa["PageSummary"]; ?></textarea><br>
		<p><strong><?php echo $adminlang["PageContent"];?></strong></p>
		<textarea name="PageContent" id="PageContent" rows="5" class="Editor"><?php echo $sayfa["PageContent"]; ?></textarea><br>
		<p><strong><?php echo $adminlang["PageDescription"];?></strong></p>
		<textarea name="PageDescription" id="PageDescription" rows="5"><?php echo $sayfa["PageDescription"]; ?></textarea>
		<p><span class="gray size10"><?php echo $adminlang["msgMetaDescription"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["PageKeywords"];?></strong></p>
		<input type="text" name="PageKeywords" id="PageKeywords" value='<?php echo $sayfa["PageKeywords"]; ?>'>
		<p><span class="gray size10"><?php echo $adminlang["msgMetaKeywords"];?></span><br><br></p>
		<div>
		<p><strong><?php echo $adminlang["PageProfilePhoto"];?></strong></p>
		<p><img src='<?php echo ss($sayfa["PageProfilePhoto"]) == "-" ? URL."admin/_images/noimage.png" : URL.ss($sayfa["PageProfilePhoto"]);?>' alt="" style='<?php echo "width: ".$bilgi["PageProfilPhotoWidth"]."px; height: ".$bilgi["PageProfilPhotoHeight"]."px;"; ?>'></p>
		<input type="file" name="PageProfilePhoto"/><br>
		</div>
		<p><strong><?php echo $adminlang["PageStatus"];?></strong></p>
		<select name="PageStatus">
			<option value="0" <?php echo !$sayfa["PageStatus"] ? 'selected' : null; ?>><?php echo $adminlang["Offline"];?></option>
			<option value="1" <?php echo $sayfa["PageStatus"] ? 'selected' : null; ?>><?php echo $adminlang["Online"];?></option>
		</select>
		<input type="submit" id="SubmitUpdatePage" name="SubmitUpdatePage" value='<?php echo $adminlang["UpdatePage"];?>' class="okay">
	</form>
	<hr>
	<p><strong><?php echo $adminlang["PagePhotos"]; ?></strong> - <a class="iptal" onclick="$.deleteAllPagePhotos('<?php echo $adminlang["msgDeleteAllPagePhotos"]; ?>','<?php echo $sayfa["PageID"]; ?>');" href="javascript:void();"><?php echo $adminlang["DeleteAllPagePhotos"]; ?></a></p>
	<p><span class="red size10"><?php echo $adminlang["msgSortPagePhotos"]; ?></span><br></p>
	<ul id="PagePhotos" class="SortPagePhotos">
		<?php
			$sorgu2 = sorgula("SELECT * FROM pagephotos WHERE PhotoStatus = 1 && PageID = '$id' ORDER BY PhotoOrder");
			if(mysql_affected_rows()){
				while($gelen2 = gelen($sorgu2)){

		?>
		<li id='listItem_<?= $gelen2["PhotoID"]?>' class="ui-state-default">
			<img class="handle" src='<?php echo URL.ss($gelen2["PhotoTHPath"]);?>' alt="">
			<?php
				$durum = ss($gelen2["PhotoStatus"]);
				if ($durum == 1) {
			?>
				<a onclick="$.changePagePhotoStatus('<?php echo ss($gelen2["PhotoID"]); ?>');" href="javascript:void();" class="table-icon visible" title='<?php echo $adminlang["OnOffline"]; ?>'></a>
			<?php
				}else {
			?>
				<a onclick="$.changePagePhotoStatus('<?php echo ss($gelen2["PhotoID"]); ?>');" href="javascript:void();" class="table-icon invisible" title='<?php echo $adminlang["OnOffline"]; ?>'></a>
				<?php
				}
			?>
			<a href='?zone=pagemanagement&do=editpagephoto&id=<?php echo $gelen2["PhotoID"]; ?>' class="table-icon edit" title='<?php echo $adminlang["Edit"]; ?>'></a>
			<a onclick="$.deletePagePhoto('<?php echo $adminlang["msgDeletePagePhoto"];?>','<?php echo ss($gelen2["PhotoID"]); ?>');" href="javascript:void();" class="table-icon delete" title='<?php echo $adminlang["DeletePagePhoto"]; ?>'></a>
		</li>
		<?php
				}
			}else{
				bilgi(2,$adminlang["msgNoPagePhoto"]);
			}
		?>
	</ul>
	<div class="clear"></div>
	<hr>
	<p><strong><?php echo $adminlang["msgPagePhotosOffline"]; ?></strong></p>
	<ul id="PagePhotosOffline">
		<?php
			$sorgu2 = sorgula("SELECT * FROM pagephotos WHERE PhotoStatus = 0 && PageID = '$id'");
			if(mysql_affected_rows()){
				while($gelen3 = gelen($sorgu2)){

		?>
		<li id='listItem_<?= $gelen3["PhotoID"]?>' class="ui-state-default">
			<img src='<?php echo URL.ss($gelen3["PhotoTHPath"]);?>' alt="">
			<?php
				$durum = ss($gelen3["PhotoStatus"]);
				if ($durum == 1) {
			?>
				<a onclick="$.changePagePhotoStatus('<?php echo ss($v["PhotoID"]); ?>');" href="javascript:void();" class="table-icon visible" title='<?php echo $adminlang["OnOffline"]; ?>'></a>
			<?php
				}else {
			?>
				<a onclick="$.changePagePhotoStatus('<?php echo ss($gelen3["PhotoID"]); ?>');" href="javascript:void();" class="table-icon invisible" title='<?php echo $adminlang["OnOffline"]; ?>'></a>
				<?php
				}
			?>
			<a href='?zone=pagemanagement&do=editpagephoto&id=<?php echo $gelen2["PhotoID"]; ?>' class="table-icon edit" title='<?php echo $adminlang["Edit"]; ?>'></a>
			<a onclick="$.deletePagePhoto('<?php echo $adminlang["msgDeletePagePhoto"];?>','<?php echo ss($gelen3["PhotoID"]); ?>');" href="javascript:void();" class="table-icon delete" title='<?php echo $adminlang["DeletePagePhoto"]; ?>'></a>
		</li>
		<?php
				}
			}else{
			}
		?>
	</ul>
</div>