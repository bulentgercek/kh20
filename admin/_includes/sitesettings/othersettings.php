<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$dilkodu = session("SMLID");
	// $sorgu = sorgula("SELECT * FROM pagesettings WHERE LangID = '$dilkodu'");
	// $gelen = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["OtherSettingsPageTitle"];?></h2>
<div id="InfoSiteSettings" class="ucPopup"><h3></h3><p></p></div>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<!-- <p><span class="gray size10"><?php echo $adminlang["msgSiteTitle"];?><br><br></p> -->
		<p><strong><?php echo $adminlang["PageProfilePhotoWidth"];?> </strong><!-- <span class="red">(<?php echo $adminlang["Required"];?>)</span> --></p>
		<input type="text" name="PageProfilePhotoWidth" id="PageProfilePhotoWidth" value="<?php echo $gelen["PageProfilePhotoWidth"]; ?>">
		<p><strong><?php echo $adminlang["PageProfilePhotoHeight"];?> </strong></p>
		<input type="text" name="PageProfilePhotoHeight" id="PageProfilePhotoHeight" value="<?php echo $gelen["PageProfilePhotoHeight"]; ?>">
		<input type="submit" id="SubmitPageSettings" value='<?php echo $adminlang["SaveSettings"];?>' class="okay">
	</form>
</div>