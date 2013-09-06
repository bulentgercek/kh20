<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["ShowAllUsersPageTitle"]; ?></h2>
<div id="InfoShowAllUsers" class="ucPopup"><h3></h3><p></p></div>
<div class="main">
	<?php
		$sorgu = sorgula("SELECT * FROM users");
		if(mysql_affected_rows()){
	?>
	<table>
		<tr class="title">
			<th><?php echo $adminlang["UserFullName"]; ?></th>
			<th><?php echo $adminlang["UserName"]; ?></th>
			<th><?php echo $adminlang["UserRole"]; ?></th>
			<th><?php echo $adminlang["Transactions"]; ?></th>
		</tr>
		<?php
			while($gelen = gelen($sorgu)){
		?>
		<tr>
			<td class="textcenter"><?php echo ss($gelen["UserFullName"]); ?></td>
			<td class="textcenter"><?php echo ss($gelen["UserName"]); ?></td>
			<td class="textcenter"><?php
				switch ($gelen["UserRole"]) {
				 	case '2': echo $adminlang["Administrator"]; break;
				 	case '3': echo $adminlang["Moderator"]; break;
				 }
			?></td>
			<td class="textcenter">
				<a href="<?php echo URL;?>admin/index.php?zone=usermanagement&do=edituser&id=<?php echo $gelen["UserID"]; ?>" class="table-icon edit" title='<?php echo $adminlang["Edit"]; ?>'></a>
				<a onclick="$.deleteUser('<?php echo $adminlang["msgDeleteUser"]; ?>','<?php echo $gelen["UserID"]; ?>');" id='<?php echo $gelen["UserID"]; ?>' href="javascript:void();" class="table-icon delete submitDeleteUser" title='<?php echo $adminlang["Delete"]; ?>'></a>
			</td>
		</tr>
		<?php } ?>
	</table>
	<?php
		}else{
			bilgi(2,mesaj("kayıtlı bir fotoğraf"));
		}
	?>
</div>
