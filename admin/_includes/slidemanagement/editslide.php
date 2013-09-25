<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;

	$id = get("id");
	$dilkodu = session("SMLID");
	$sorgu = sorgula("SELECT * FROM slides WHERE SlideID = '$id' AND LangID = '$dilkodu' ");
	if(mysql_affected_rows() < 1){
		yonlendir(URL."admin/index.php?zone=slidemanagement&do=showslides");
		exit;
	}
	$slayt = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["EditSlidePageTitle"];?></h2>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<input type="hidden" name="SlideID" id="SlideID" value='<?php echo $id; ?>'/>
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo URL."admin/index.php?zone=slidemanagement&do=showslides"; ?>'/>
		<span><strong><?php echo $adminlang["SlideName"];?></strong></span>
		<input type="text" name="SlideTitle" id="SlideTitle" value='<?php echo ss($slayt["SlideTitle"]); ?>'>
		<span><strong><?php echo $adminlang["SlideDescription"];?></strong></span>
		<input type="text" name="SlideDescription" id="SlideDescription" value='<?php echo ss($slayt["SlideDescription"]); ?>'>
		<input type="submit" id="SubmitUpdateSlide" name="submit" value='<?php echo $adminlang["Update"];?>' class="okay"/>
		<a href='<?php echo $_SERVER["HTTP_REFERER"]; ?>' class="discard"><?php echo $adminlang["Cancel"];?></a>
	</form>
	<hr>
	<p><img src='../<?php echo ss($slayt["SlidePath"]); ?>' alt="" style="width: 690px; border: 1px solid #000;"></p>
</div>