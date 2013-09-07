<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;

	$id = get("id");
	$dilkodu = session("SMLID");
	$GeriDon = $_SERVER["HTTP_REFERER"];
	$sorgu = sorgula("SELECT * FROM pagephotos WHERE PhotoID = '$id' AND LangID = '$dilkodu' ");
	if(mysql_affected_rows() < 1){
		yonlendir($GeriDon);
		exit;
	}
	$fotograf = gelen($sorgu);
?>
<h2 class="title"><?php echo $adminlang["EditPagePhotoPageTitle"];?></h2>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<input type="hidden" name="PhotoID" id="PhotoID" value='<?php echo $id; ?>'/>
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo $GeriDon; ?>'/>
		<span><strong><?php echo $adminlang["PhotoName"];?></strong></span>
		<input type="text" name="PhotoName" id="PhotoName" value='<?php echo ss($fotograf["PhotoName"]); ?>'>
		<span><strong><?php echo $adminlang["PhotoDescription"];?></strong></span>
		<input type="text" name="PhotoDescription" id="PhotoDescription" value='<?php echo ss($fotograf["PhotoDescription"]); ?>'>
		<input type="submit" id="SubmitUpdatePagePhoto" name="submit" value='<?php echo $adminlang["Update"];?>' class="okay"/>
		<a href='<?php echo $GeriDon; ?>' class="discard"><?php echo $adminlang["Cancel"];?></a>
	</form>
	<hr>
	<p><img src='../<?php echo ss($fotograf["PhotoPath"]); ?>' alt="" style="width: 698px; border: 1px solid #000;"></p>
</div>