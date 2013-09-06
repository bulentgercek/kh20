<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
?>
<h2 class="title"><?php echo $adminlang["EditPageTitle"];?></h2>
<div id="InfoPageManagement" class="ucPopup"><h3></h3><p></p></div>
<?php
	$id = get("id");
	$sorgu = sorgula("SELECT * FROM pages WHERE PageID = '$id'");
	if(mysql_affected_rows() < 1){
		yonlendir(URL."admin/index.php?zone=pagemanagement&do=showpages");
		exit;
	}
	$sayfa = gelen($sorgu);
 ?>
<div class="main">
	<form action="" method="post" onsubmit="return false">
		<input type="hidden" name="RefererPage" id="RefererPage" value='<?php echo $_SERVER["HTTP_REFERER"] ?>'/>
		<input type="hidden" name="RefererPageID" id="RefererPageID" value='<?php echo $sayfa["PageID"]; ?>'/>
		<select name="Language">

			<?php

					$sorgu = sorgula("SELECT * FROM languages WHERE LangStatus = 1");
					if(mysql_affected_rows()){
						while($gelendil = gelen($sorgu)){
			?>
			<option value='<?php echo $gelendil["LangID"];?>' <?php if($sayfa["LangID"] == $gelendil["LangID"]){ echo selected; } ?>>-- <?php echo $gelendil["LangName"];?></option>
			<?php
						}
					}
			 ?>
		</select>
		<p><span class="gray size10"><?php echo $adminlang["msgLanguage"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["PageTitle"];?> </strong><span class="red">(<?php echo $adminlang["Required"];?>)</span></p>
		<input type="text" name="PageTitle" id="PageTitle" value='<?php echo $sayfa["PageTitle"]; ?>'><br>
		<p><strong><?php echo $adminlang["PageSummary"];?></strong></p>
		<textarea name="PageSummary" id="PageSummary" rows="3">'<?php echo $sayfa["PageSummary"]; ?>'</textarea><br>
		<p><strong><?php echo $adminlang["PageContent"];?></strong></p>
		<textarea name="PageContent" id="PageContent" rows="5" class="Editor"><?php echo $sayfa["PageContent"]; ?></textarea><br>
		<p><strong><?php echo $adminlang["PageDescription"];?></strong></p>
		<textarea name="PageDescription" id="PageDescription" rows="5"><?php echo $sayfa["PageDescription"]; ?></textarea>
		<p><span class="gray size10"><?php echo $adminlang["msgMetaDescription"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["PageKeywords"];?></strong></p>
		<input type="text" name="PageKeywords" id="PageKeywords" value='<?php echo $sayfa["PageKeywords"]; ?>'>
		<p><span class="gray size10"><?php echo $adminlang["msgMetaKeywords"];?></span><br><br></p>
		<p><strong><?php echo $adminlang["PageStatus"];?></strong></p>
		<select name="PageStatus">
			<option value="0" <?php echo !$sayfa["PageStatus"] ? 'selected' : null; ?>><?php echo $adminlang["Offline"];?></option>
			<option value="1" <?php echo $sayfa["PageStatus"] ? 'selected' : null; ?>><?php echo $adminlang["Online"];?></option>
		</select>
		<input type="submit" id="SubmitUpdatePage" name="SubmitUpdatePage" value='<?php echo $adminlang["UpdatePage"];?>' class="okay">
	</form>
</div>