<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["SortSlidesPageTitle"]; ?></h2>
<div class="main">
	<ul id="SliderFotograflari" class="SortSlidePhotos">
		<?php
			$sorgu = sorgula("SELECT * FROM slides WHERE SlideStatus = 1 ORDER BY SlideOrder");
			if(mysql_affected_rows()){
				while($gelen = gelen($sorgu)){
		?>
			<li id='listItem_<?= $gelen["SlideID"]?>' class="ui-state-default"><img src='<?php echo URL.ss($gelen["SlideTHPath"]); ?>' alt="move" class="handle" /></li>
		<?php
				}
			}else{
				bilgi(2,"kayitli bir hizmet sayfasi");
			}
		?>
	</ul>
	<div class="clear"></div>
	<div id="InfoSlideOrder" class="n_ok"></div>
</div>
