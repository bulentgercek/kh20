<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["AddNewUserPageTitle"];?></h2>
<div id="InfoUserManagement" class="ucPopup"><h3></h3><p></p></div>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo URL."admin/index.php?zone=usermanagement&do=showallusers"; ?>'/>
		<p><strong><?php echo $adminlang["UserFullName"];?></p>
		<input type="text" name="UserFullName" id="UserFullName" value=""><br>
		<p><strong><?php echo $adminlang["UserName"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="UserName" id="UserName" value="">
		<p><span id="InfoUserName" class="red size10"><?php echo $adminlang["msgUserName"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["UserPassword"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="password" name="UserPassword" id="UserPassword" value="" data-indicator="pwindicator">
		<p><span class="gray size10"><?php echo $adminlang["msgUserPassword"];?></span>
		<div id="pwindicator">
          	<div class="bar"></div>
          	<div class="label"></div>
          </div>
          </p><br>
		<p><strong><?php echo $adminlang["UserEMail"];?></strong></p>
		<input type="text" name="UserEMail" id="UserEMail" value="">
		<p><span class="gray size10"><?php echo $adminlang["msgUserEMail"];?></span>
		<p><span id="InfoUserEMailAddress" class="gray size10"></span></p>
		<p><strong><?php echo $adminlang["UserRole"];?></strong>&nbsp;&nbsp;
		<select name="UserRoles">
			<option value="2" ><?php echo $adminlang["Administrator"];?></option>
			<option value="3" ><?php echo $adminlang["Moderator"];?></option>
		</select></p>
		<input type="submit" id="SubmitNewUser" value='<?php echo $adminlang["SaveNewUser"];?>' class="okay">
	</form>
</div>