<?php echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null; $dilkodu = session("SMLID"); ?>
<h2 class="title"><?php echo $adminlang["AddNewCategoryPageTitle"];?></h2>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<!-- <p><span class="gray size10"><?php echo $adminlang["msgSiteTitle"];?><br><br></p> -->
		<p><strong><?php echo $adminlang["CategoryName"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="PhotoGalleryNewCategoryName" id="PhotoGalleryNewCategoryName" value="">
		<p><strong><?php echo $adminlang["CategoryDescription"];?></strong></p>
		<textarea name="PhotoGalleryNewCategoryDescription" id="PhotoGalleryNewCategoryDescription" rows="5"></textarea>
		<p><strong><?php echo $adminlang["CategoryStatus"];?></strong>
		<select name="CategoryStatus">
			<option value="0"><?php echo $adminlang["Offline"];?></option>
			<option value="1" selected><?php echo $adminlang["Online"];?></option>
		</select>
		</p>
		<input type="submit" id="SubmitAddNewCategory" value='<?php echo $adminlang["SavePGCategory"];?>' class="okay">
	</form>
</div>