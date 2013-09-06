<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["ShowPagesPageTitle"]; ?></h2>
<div class="main">
	<div class="infom"></div>
	<ul id="test-list" class="SayfalariSirala">
		<?php
			$sorgu = sorgula("SELECT PageID, PageTitle FROM pages WHERE PageStatus = 1 AND SubPageID = 0 ORDER BY PageOrder");
			if(mysql_affected_rows()){
				while($gelen = gelen($sorgu)){
		?>
		<li id='listItem_<?= $gelen["PageID"]?>'><img src="_images/arrow.png" alt="move" width="12" height="12" class="handle" /><?php echo ss($gelen["PageTitle"]); ?></li>
		<?php
				}
			}else{
				bilgi(2,"kayitli bir hizmet sayfasi");
			}
		?>
	</ul>
	<div id="InfoPageOrder" class="n_ok"></div>
</div>
