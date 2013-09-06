<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$sorgu = sorgula("SELECT * FROM socialnetwork");
	$gelen = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["SocialNetworkPageTitle"];?></h2>
<div id="InfoSocialNetwork" class="ucPopup"><h3></h3><p></p></div>
<div class="main">
	<form id="SocialNetworkForm" action="" method="post" onsubmit="return false">
		<p><strong>Facebook</strong></p>
		<input type="text" name="Facebook" id="Facebook" value="<?php echo $gelen["Facebook"]; ?>">
		<p><strong>Twitter</strong></p>
		<input type="text" name="Twitter" id="Twitter" value="<?php echo $gelen["Twitter"]; ?>">
		<p><strong>Google</strong></p>
		<input type="text" name="Google" id="Google" value="<?php echo $gelen["Google"]; ?>">
		<p><strong>Pinterest</strong></p>
		<input type="text" name="Pinterest" id="Pinterest" value="<?php echo $gelen["Pinterest"]; ?>">
		<p><span class="gray size10"></span></p>
		<input type="submit" id="SocialNetworkSubmit" value='<?php echo $adminlang["Save"];?>' class="okay">
	</form>
</div>