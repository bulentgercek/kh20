<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["AddPagePhotosPageTitle"]; ?></h2>
<div class="n_warning" style="display: block !important; margin-bottom: -10px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgAddNewSlide02"]; ?></p></div>
<div class="n_warning" style="display: block !important; margin-bottom: -10px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgAddNewSlide03"]; ?></p></div>
<div class="n_error" style="display: block !important; margin-bottom: -5px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgSelectMainPage"]; ?></p></div>
<div class="main">
	<p><hr></p>
	<form id="PagePhotoUpload" method="post" action="_includes/pagemanagement/ajaxes/addPagePhotos.php" enctype="multipart/form-data">
		<strong>Sayfa: </strong>
		<select name="PageID">
			<option value="HOP" selected>--- <?php echo $adminlang["msgSelectPage"]; ?> ---</option>
			<?php
				function getSubPages($subid = 0, $string = 1, $DilID){
					$sorgu = sorgula("SELECT PageID, PageTitle FROM pages WHERE SubPageID = '$subid' AND LangID = '$DilID' ORDER BY PageStatus = 1, PageOrder");
					if(mysql_affected_rows()){
						while($gelen = gelen($sorgu)){
			?>
				<option value='<?php echo $gelen["PageID"]; ?>'><?php echo str_repeat('--', $string).' '.$gelen["PageTitle"]; ?></option>
			<?php
					getSubPages($gelen["PageID"], $string + 1, session("SMLID"));
						}
					}else{
						return false;
					}
				}
				getSubPages(0,1,session("SMLID"));
			 ?>
		</select>
		<input type="file" id="UploadImage" name="resim[]" multiple/>
		<input type="submit" name="submit" id="SubmitPagePhotos" value='<?php echo $adminlang["Upload"]; ?>' class="okay"/>
	</form>
</div>