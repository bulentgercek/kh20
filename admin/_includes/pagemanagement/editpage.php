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
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo $_SERVER["HTTP_REFERER"] ?>'/>
		<input type="hidden" name="RefererPageID" id="RefererPageID" value='<?php echo $sayfa["PageID"]; ?>'/>
		<input type="hidden" name="Width" id="Width" value='<?php echo $bilgi["PageProfilPhotoWidth"]; ?>'/>
		<input type="hidden" name="Height" id="Height" value='<?php echo $bilgi["PageProfilPhotoHeight"]; ?>'/>
		<p><strong><?php echo $adminlang["PageTitle"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="PageTitle" id="PageTitle" value='<?php echo $sayfa["PageTitle"]; ?>'><br>
		<p><strong><?php echo $adminlang["PageSummary"];?></strong></p>
		<textarea name="PageSummary" id="PageSummary" rows="3">'<?php echo $sayfa["PageSummary"]; ?>'</textarea><br>
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
		<p><img src='<?php echo URL.ss($sayfa["PageProfilePhoto"]) ?>' alt="" style='<?php echo "width: ".$bilgi["PageProfilPhotoWidth"]."px; height: ".$bilgi["PageProfilPhotoHeight"]."px;"; ?>'></p>
		<input type="file" name="PageProfilePhoto"/><br>
		</div>
		<p><strong><?php echo $adminlang["PageStatus"];?></strong></p>
		<select name="PageStatus">
			<option value="0" <?php echo !$sayfa["PageStatus"] ? 'selected' : null; ?>><?php echo $adminlang["Offline"];?></option>
			<option value="1" <?php echo $sayfa["PageStatus"] ? 'selected' : null; ?>><?php echo $adminlang["Online"];?></option>
		</select>
		<input type="submit" id="SubmitUpdatePage" name="SubmitUpdatePage" value='<?php echo $adminlang["UpdatePage"];?>' class="okay">
	</form>
</div>