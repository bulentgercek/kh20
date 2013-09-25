<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$dilkodu = session("SMLID");
	// $sorgu = sorgula("SELECT * FROM pagesettings WHERE LangID = '$dilkodu'");
	// $gelen = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["OtherSettingsPageTitle"];?></h2>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<!-- <p><span class="gray size10"><?php echo $adminlang["msgSiteTitle"];?><br><br></p> -->
		<p><strong><?php echo $adminlang["PageProfilePhotoWidth"];?> </strong><!-- <span class="red">(<?php echo $adminlang["Required"];?>)</span> --></p>
		<input type="text" name="PageProfilePhotoWidth" id="PageProfilePhotoWidth" value="<?php echo PPP_W; ?>">
		<p><strong><?php echo $adminlang["PageProfilePhotoHeight"];?> </strong></p>
		<input type="text" name="PageProfilePhotoHeight" id="PageProfilePhotoHeight" value="<?php echo PPP_H; ?>">
		<p><strong><?php echo $adminlang["SliderPhotosHeight"];?> </strong></p>
		<input type="text" name="SliderPhotosHeight" id="SliderPhotosHeight" value="<?php echo SLD_H; ?>">

		<input type="submit" id="SubmitPageSettings" value='<?php echo $adminlang["SaveSettings"];?>' class="okay">
	</form>
</div>