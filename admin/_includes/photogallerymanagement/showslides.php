<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["ShowSlidesPageTitle"]; ?></h2>
<div id="InfoShowSlides" class="n_ok"></div>
<div class="main">
	<?php
		$sorgu = sorgula("SELECT * FROM slides ORDER BY SlideStatus DESC, SlideOrder");
		if(mysql_affected_rows()){
	?>
	<table>
		<tr class="title">
			<th style="width: 15%;"><?php echo $adminlang["Slide"]; ?></th>
			<th><?php echo $adminlang["SlideAddTime"]; ?></th>
			<th><?php echo $adminlang["SlideStatus"]; ?></th>
			<th style="width: 15%;"><?php echo $adminlang["Transactions"]; ?></th>
		</tr>
		<?php
			while($gelen = gelen($sorgu)){
		?>
		<tr>
			<td class="textcenter"><a href='?zone=slidemanagement&do=editslide&id=<?php echo $gelen["SlideID"]; ?>'><img src='<?php echo URL.ss($gelen["SlideTHPath"]); ?>' alt="" class="thumbnail"></a></td>
			<td class="textcenter"><?php echo ss($gelen["SlideAddDate"]); ?></td>
			<td class="textcenter">
				<?php
					$durum = ss($gelen["SlideStatus"]);
					if ($durum == 1) {
						echo '<span class="green">'.$adminlang["Online"].'</span>';
					}else {
						echo '<span class="red">'.$adminlang["Offline"].'</span>';
					}
				?>
			</td>
			<td class="textcenter">
				<a href='?zone=slidemanagement&do=editslide&id=<?php echo $gelen["SlideID"]; ?>' class="table-icon edit" title='<?php echo $adminlang["Edit"]; ?>'></a>
				<a onclick="$.deleteSlide('<?php echo $adminlang["msgDeleteSlide"]; ?>','<?php echo $gelen["SlideID"]; ?>');" id='<?php echo $gelen["SlideID"]; ?>' href="javascript:void();" class="table-icon delete submitDeleteSlide" title='<?php echo $adminlang["Delete"]; ?>'></a>
				<a onclick="$.changeSlideStatus('<?php echo $gelen["SlideID"]; ?>');" id='<?php echo $gelen["SlideID"]; ?>' href="javascript:void();" class="table-icon block_users" title='<?php echo $adminlang["OnOffLine"]; ?>'></a>
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
