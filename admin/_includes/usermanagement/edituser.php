<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<?php

	$id = get("id");
	$sorgu = sorgula("SELECT * FROM users WHERE UserID = '$id'");
	if(mysql_affected_rows() < 1){
		yonlendir(URL."admin/index.php?zone=usermanagement&do=showallusers");
		exit;
	}
	$kullanici = gelen($sorgu);

 ?>
<h2 class="title"><?php echo $adminlang["AddNewUserPageTitle"];?></h2>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<p><strong><?php echo $adminlang["UserFullName"];?></p>
		<input type="hidden" name="UserID" id="UserID" value='<?php echo $id; ?>'/>
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo URL."admin/index.php?zone=usermanagement&do=showallusers"; ?>'/>
		<input type="text" name="UserFullName" id="UserFullName" value='<?php echo $kullanici["UserFullName"]; ?>'><br>
		<p><strong><?php echo $adminlang["UserName"];?> </strong></p>
		<input type="text" disabled name="UserName" id="UserName" value='<?php echo $kullanici["UserName"]; ?>'><br>
		<p><strong><?php echo $adminlang["UserPassword"];?> </strong></p>
		<input type="password" name="UserPassword" id="UserPassword" value='' data-indicator="pwindicator">
		<p><span class="gray size10"><?php echo $adminlang["msgUserPassword2"];?></span></p>
		<p><span class="gray size10"><?php echo $adminlang["msgUserPassword"];?></span>
		<div id="pwindicator">
          	<div class="bar"></div>
          	<div class="label"></div>
          </div>
          </p><br>
		<p><strong><?php echo $adminlang["UserEMail"];?></strong></p>
		<input type="text" name="UserEMail" id="UserEMail" value='<?php echo $kullanici["UserEMail"]; ?>'>
		<p><span class="gray size10"><?php echo $adminlang["msgUserEMail2"];?></span>
		<p><span class="gray size10"><?php echo $adminlang["msgUserEMail"];?></span>
		<p><span id="InfoUserEMailAddress" class="gray size10"></span></p>
		<p><strong><?php echo $adminlang["UserRole"];?></strong>&nbsp;&nbsp;
		<select name="UserRoles">
			<option value="2" <?php echo $kullanici["UserRole"] == 2 ? 'selected' : null; ?> ><?php echo $adminlang["Administrator"];?></option>
			<option value="3" <?php echo $kullanici["UserRole"] != 2? 'selected' : null; ?> ><?php echo $adminlang["Moderator"];?></option>
		</select></p>
		<input type="submit" id="UpdateUser" value='<?php echo $adminlang["UpdateUser"];?>' class="okay">
		<a href='<?php echo $_SERVER["HTTP_REFERER"]; ?>' class="discard"><?php echo $adminlang["Cancel"];?></a>
	</form>
</div>