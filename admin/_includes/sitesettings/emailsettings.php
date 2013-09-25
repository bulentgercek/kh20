<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	$sorgu = sorgula("SELECT * FROM emailsettings");
	$gelen = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["EMailSettingsPageTitle"];?></h2>
<div class="main">
	<form action="" method="post">
		<p><strong><?php echo $adminlang["SMTPAddress"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="SMTPAddress" id="SMTPAddress" value="<?php echo $gelen["SMTPAddress"]; ?>">
		<p><strong><?php echo $adminlang["SMTPPort"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="SMTPPort" id="SMTPPort" value="<?php echo $gelen["SMTPPort"]; ?>">
		<p><span class="gray size10"><?php echo $adminlang["msgSMTPPort"];?></span></p>
		<p><strong><?php echo $adminlang["SenderMailAddress"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="EMailAddress" id="EMailAddress" value="<?php echo $gelen["EMailAddress"]; ?>">
		<p><span id="InfoInputEMailAddress" class="gray size10"></span></p>
		<p><strong><?php echo $adminlang["SenderMailPassword"];?></strong> <span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="password" name="EMailPassword" id="EMailPassword" value="<?php echo $gelen["EMailPassword"]; ?>">
		<input type="submit" value='<?php echo $adminlang["SaveSettings"];?>' class="okay">
	</form>
</div>