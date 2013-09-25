<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["AddNewSlidePageTitle"]; ?></h2>
<div class="n_error" style="display: block !important; margin-bottom: -10px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgAddNewSlide01"]; ?></p></div>
<div class="n_error" style="display: block !important; margin-bottom: -10px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgAddNewSlide04"]; ?></p></div>
<div class="n_warning" style="display: block !important; margin-bottom: -10px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgAddNewSlide02"]; ?></p></div>
<div class="n_warning" style="display: block !important; margin-bottom: -5px; width: 700px; margin-left: 10px;"><p class="red"><?php echo $adminlang["msgAddNewSlide03"]; ?></p></div>
<div class="main">

	<p><hr></p>
	<form id="SlidePhotoUpload" method="post" action="_includes/slidemanagement/ajaxes/addNewSlide.php" enctype="multipart/form-data">
		<input type="file" id="UploadImage" name="resim[]" multiple/>
		<input type="submit" name="submit" id="SubmitNewSlides" value='<?php echo $adminlang["Upload"]; ?>' class="okay"/>
	</form>
</div>