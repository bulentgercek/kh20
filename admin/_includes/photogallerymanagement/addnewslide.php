<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; ?>
<h2 class="title"><?php echo $adminlang["AddNewSlidePageTitle"]; ?></h2>
<div id="InfoSlideManagement" class="n_ok"></div>
<div class="main">
	<p class="red"><?php echo $adminlang["msgAddNewSlide01"]; ?></p>
	<p><?php echo $adminlang["msgAddNewSlide02"]; ?></p>
	<p><?php echo $adminlang["msgAddNewSlide03"]; ?></p>
	<p><?php echo $adminlang["msgAddNewSlide04"]; ?></p>
	<p><hr></p>
	<form id="SlidePhotoUpload" method="post" action="_includes/slidemanagement/ajaxes/addNewSlide.php" enctype="multipart/form-data">
		<input type="file" id="UploadImage" name="resim[]" multiple/>
		<input type="submit" name="submit" id="SubmitNewSlides" value='<?php echo $adminlang["Upload"]; ?>' class="okay"/>
	</form>
</div>