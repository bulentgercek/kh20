<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["ShowLanguagesTitle"]; ?></h2>
<div class="main">
	<?php
		$sorgu = sorgula("SELECT * FROM languages ORDER BY LangStatus DESC, LangOrder");
		if(mysql_affected_rows()){
	?>
	<table>
		<tr class="title">
			<th style="width: 15%;"><?php echo $adminlang["LanguageFlag"]; ?></th>
			<th><?php echo $adminlang["LanguageName"]; ?></th>
			<th><?php echo $adminlang["LanguageShortName"]; ?></th>
			<th><?php echo $adminlang["LanguageStatus"]; ?></th>
			<th style="width: 15%;"><?php echo $adminlang["Transactions"]; ?></th>
		</tr>
		<?php
			while($gelen = gelen($sorgu)){
		?>
		<tr>
			<td class="textcenter"><img src='<?php echo URL.ss($gelen["LangFlagPath"]); ?>' alt=""></td>
			<td class="textcenter"><?php echo ss($gelen["LangName"]); ?></td>
			<td class="textcenter"><?php echo ss($gelen["LangShortName"]); ?></td>
			<td class="textcenter">
				<?php
					$durum = ss($gelen["LangStatus"]);
					if ($durum == 1) {
						echo '<span class="green">'.$adminlang["Active"].'</span>';
					}else {
						echo '<span class="red">'.$adminlang["Passive"].'</span>';
					}
				?>
			</td>
			<td class="textcenter">
				<a onclick="$.changeLanguageStatus('<?php echo $gelen["LangID"]; ?>');" id='<?php echo $gelen["LangID"]; ?>' href="javascript:void();" class="table-icon block_users" title='<?php echo $adminlang["ActivePassive"]; ?>'></a>
			</td>
		</tr>
		<?php } ?>
	</table>
	<?php
		}else{
			bilgi(2,$adminlang["msgNoSlide"]);
		}
	?>
</div>
