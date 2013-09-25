<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$dilkodu = session("SMLID");
	$sorgu = sorgula("SELECT * FROM sitesettings WHERE LangID = '$dilkodu'");
	$gelen = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["SiteSettingsPageTitle"];?></h2>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<p><strong><?php echo $adminlang["SiteTitle"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="SiteTitle" id="SiteTitle" value="<?php echo $gelen["SiteTitle"]; ?>">
		<p><span class="gray size10"><?php echo $adminlang["msgSiteTitle"];?><br><?php echo $adminlang["RemainingCharacters"];?> : <strong id="TitleKalanKarakter" class="red size10">70</strong></span><br><br></p>
		<p><strong><?php echo $adminlang["SiteURL"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="SiteURL" id="SiteURL" value="<?php echo $gelen["SiteURL"]; ?>">
		<p><span class="red size10"><?php echo $adminlang["msgSiteURL"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["SiteDescription"];?></strong></p>
		<textarea name="SiteDescription" id="SiteDescription" rows="3"><?php echo $gelen["SiteDescription"]; ?></textarea>
		<p><span class="gray size10"><?php echo $adminlang["msgSiteDescription"];?><br><?php echo $adminlang["RemainingCharacters"];?> : <strong id="DescKalanKarakter" class="red size10">70</strong></span><br><br></p>
		<p><strong><?php echo $adminlang["SiteKeywords"];?></strong></p>
		<input type="text" name="SiteKeywords" id="SiteKeywords" value="<?php echo $gelen["SiteKeyWords"]; ?>">
		<p><span class="gray size10"><?php echo $adminlang["msgSiteKeywords"];?><br><?php echo $adminlang["RemainingCharacters"];?> : <strong id="KeyWKalanKarakter" class="red size10">70</strong></span><br><br></p>
		<p><strong><?php echo $adminlang["SiteStatus"];?></strong></p>
		<select name="SiteStatus">
			<option value="0" <?php echo !$gelen["SiteStatus"] ? 'selected' : null; ?> ><?php echo $adminlang["Offline"];?></option>
			<option value="1" <?php echo $gelen["SiteStatus"] ? 'selected' : null; ?> ><?php echo $adminlang["Online"];?></option>
		</select>
		<input type="submit" id="SubmitSiteSettings" value='<?php echo $adminlang["SaveSettings"];?>' class="okay">
	</form>
</div>