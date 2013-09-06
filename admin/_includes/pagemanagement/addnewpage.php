<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$sorgu = sorgula("SELECT PageProfilPhotoWidth, PageProfilPhotoHeight FROM othersettings");
	$bilgi = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["AddNewPageTitle"];?></h2>
<div id="InfoPageManagement" class="ucPopup"><h3></h3><p></p></div>
<div class="main">
	<form id="AddNewPageWPhoto" action="_includes/pagemanagement/ajaxes/addNewPageWPhoto.php" method="post" enctype="multipart/form-data">
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo URL."admin/index.php?zone=pagemanagement&do=showpages"; ?>'/>
		<input type="hidden" name="Width" id="Width" value='<?php echo $bilgi["PageProfilPhotoWidth"]; ?>'/>
		<input type="hidden" name="Height" id="Height" value='<?php echo $bilgi["PageProfilPhotoHeight"]; ?>'/>
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
		<p><strong><?php echo $adminlang["PageProfilePhoto"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="file" name="ProfilFoto"/><br>
		<p><strong><?php echo $adminlang["PageStatus"];?></strong></p>
		<select name="PageStatus">
			<option value="0"><?php echo $adminlang["Offline"];?></option>
			<option value="1" selected><?php echo $adminlang["Online"];?></option>
		</select>
		<input type="submit" id="SubmitAddNewPage2" name="SubmitAddNewPage2" value='<?php echo $adminlang["SavePage"];?>' class="okay">
	</form>
</div>