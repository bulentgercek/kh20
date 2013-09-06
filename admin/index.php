<?php

	require_once("../config/config.php");
	require_once("../config/system.php");

	if(!session("Login")){
		yonlendir(URL."admin/login.php");
	}

	define("ZUBIZARETTA", true);

	if(!$_SESSION["lang"]){
		$_SESSION["lang"] = "tr";
		require("language/tr.php");
	}else{
		require("language/".$_SESSION["lang"].".php");
	}

	if(!$_SESSION["SML"]){
		$_SESSION["SML"] = "tr";
	}

	$sitedilsorgu = sorgula("SELECT LangID FROM languages WHERE LangShortName = '".$_SESSION["SML"]."'");
	$gelendilkodu = gelen($sitedilsorgu);
	$_SESSION["SMLID"] = $gelendilkodu["LangID"];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>KH20 İçerik Yönetim Sistemi</title>
	<link rel="stylesheet" href="_css/admin.css" />
	<link rel="stylesheet" href="_css/pass.css" />
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
	<link rel="stylesheet" href="_css/jquery.Jcrop.min.css" media="screen" type="text/css" />
	<script src="_js/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" type="text/javascript"></script>
	<script src="_js/jquery.Jcrop.min.js" type="text/javascript"></script>
	<script src="_js/md5.js" type="text/javascript"></script>
	<script src="_js/jquery.pwstrength.js" type="text/javascript"></script>
	<script src="ckeditor/ckeditor.js" type="text/javascript"></script>
	<script src="ckeditor/adapters/jquery.js" type="text/javascript"></script>
	<script src="_js/jquery.form.js" type="text/javascript"></script>
	<script src="_js/admin.js" type="text/javascript"></script>
</head>
<body>
	<div id="SiteInfoMessage" class="ucPopup"><h3></h3><p></p></div>
	<!-- GENEL STARTS -->
	<div id="Genel">
		<!-- HEADER STARTS -->
		<div id="Header">
			<!-- TOP AREA STARTS -->
			<div id="Logo">
				<a href="index.php"><img src="_images/logo.png" alt="" /></a>
			</div>
			<div id="UserTools">
				<span><?php echo $adminlang["Welcome"];?> <strong><a href='?do=edituser&name=<?php echo session("UserName") ?>'><?php echo session("UserFullName") ?></strong></a> | <a href="?do=logout" class="logout"><?php echo $adminlang["Logout"];?></a></span>
				<span><?php echo $adminlang["LastLogin"];?>; <strong><?php echo turkcetarih('j F Y, l',substr(session("UserLastLogin"), 0, 10))." - Saat: ".substr(session("UserLastLogin"), 11, 8); ?></strong></span>
				<div id="PanelLanguages">
					<a href="?zone=mainsettings&do=changelang&lang=tr"><img src='<?php echo URL."_uploads/flags/tr.png"; ?>' alt="" /></a><a href="?zone=mainsettings&do=changelang&lang=en"><img src='<?php echo URL."_uploads/flags/en.png"; ?>' alt="" /></a>
				</div>
			</div>
			<!-- TOP AREA ENDS -->
			<div class="clear"></div>
		</div>
		<!-- HEADER ENDS -->
		<div class="clear"></div>
		<!-- CONTENTS STARTS -->
		<div id="Contents">
			<div id="LeftSide">

				<div class="Menu">
					<h2><?php echo $adminlang["SiteMainLanguage"];?></h2>
					<ul>
						<li class="b1">
							<select id="SiteMainLanguage" name="Language" style="margin-bottom: 0; width: 97%;">
								<?php
										$sorgu = sorgula("SELECT * FROM languages WHERE LangStatus = 1");
										if(mysql_affected_rows()){
											while($gelendilcik = gelen($sorgu)){
								?>
								<option value='<?php echo $gelendilcik["LangID"];?>' <?php if(session("SML") == $gelendilcik["LangShortName"]){ echo selected; } ?>>-- <?php echo $gelendilcik["LangName"];?></option>
								<?php
											}
										}
								 ?>
							</select>
						</li>
					</ul>
				</div>

				<div class="Menu">
					<h2><?php echo $adminlang["SiteSettingsMainTitle"];?></h2>
					<ul>
						<li class="b1"><a class="icon view" href="<?php echo URL; ?>" target="_blank"><?php echo $adminlang["ViewSite"];?></a></li>
						<li class="b2"><a class="icon settings" href="?zone=sitesettings&do=settings"><?php echo $adminlang["SiteSettings"];?></a></li>
						<li class="b1"><a class="icon mail" href="?zone=sitesettings&do=emailsettings"><?php echo $adminlang["EMailSettings"];?></a></li>
						<li class="b2"><a class="icon social" href="?zone=sitesettings&do=social"><?php echo $adminlang["SocialNetworkSettings"];?></a></li>
					</ul>
				</div>

				<div class="Menu">
					<h2><?php echo $adminlang["LanguageManagementMainTitle"];?></h2>
					<ul>
						<li class="b1"><a class="icon list" href="?zone=languagemanagement&do=showlanguages"><?php echo $adminlang["ShowLanguages"];?></a></li>
					</ul>
				</div>

				<div class="Menu">
					<h2><?php echo $adminlang["PageManagementMainTitle"];?></h2>
					<ul>
						<li class="b1"><a class="icon list" href="?zone=pagemanagement&do=showpages"><?php echo $adminlang["ShowPages"];?></a></li>
						<li class="b2"><a class="icon plus" href="?zone=pagemanagement&do=addnewpage"><?php echo $adminlang["AddNewPage"];?></a></li>
						<li class="b1"><a class="icon refresh" href="?zone=pagemanagement&do=sortpages"><?php echo $adminlang["SortPages"];?></a></li>
						<li class="b2"></li>
						<li class="b1"><a class="icon list" href="?zone=pagemanagement&do=showsubpages"><?php echo $adminlang["ShowSubPages"];?></a></li>
						<li class="b2"><a class="icon plus" href="?zone=pagemanagement&do=addnewsubpage"><?php echo $adminlang["AddNewSubPage"];?></a></li>
						<li class="b1"><a class="icon refresh" href="?zone=pagemanagement&do=sortsubpages"><?php echo $adminlang["SortSubPages"];?></a></li>
						<li class="b2"></li>
						<li class="b1"><a class="icon photo" href="?zone=pagemanagement&do=addpagephotos"><?php echo $adminlang["AddPagePhotos"];?></a></li>
					</ul>
				</div>

				<div class="Menu">
					<h2><?php echo $adminlang["UserManagementMainTitle"];?></h2>
					<ul>
						<li class="b1"><a class="icon user" href="?zone=usermanagement&do=showallusers"><?php echo $adminlang["ShowAllUsers"];?></a></li>
						<li class="b2"><a class="icon plus" href="?zone=usermanagement&do=addnewuser"><?php echo $adminlang["AddNewUser"];?></a></li>
					</ul>
				</div>

				<div class="Menu">
					<h2><?php echo $adminlang["SlideManagementMainTitle"];?></h2>
					<ul>
						<li class="b1"><a class="icon list" href="?zone=slidemanagement&do=showslides"><?php echo $adminlang["ShowSlides"];?></a></li>
						<li class="b2"><a class="icon photo" href="?zone=slidemanagement&do=addnewslide"><?php echo $adminlang["AddNewSlide"];?></a></li>
						<li class="b1"><a class="icon refresh" href="?zone=slidemanagement&do=sortslides"><?php echo $adminlang["SortSlides"];?></a></li>
					</ul>
				</div>

				<div class="Menu">
					<h2><?php echo $adminlang["PhotoGalleryManagementMainTitle"];?></h2>
					<ul>
						<li class="b1"><a class="icon list" href="?zone=photogallerymanagement&do=showphotos"><?php echo $adminlang["ShowPhotos"];?></a></li>
						<li class="b2"><a class="icon photo" href="?do=photogallerymanagement&do=addnewphoto"><?php echo $adminlang["AddNewPhotos"];?></a></li>
						<li class="b1"><a class="icon list" href="?do=photogallerymanagement&do=addnewcategory"><?php echo $adminlang["AddNewCategory"];?></a></li>
					</ul>
				</div>

			<?php if (session("UserRole") == 1) { ?>
				<div class="Menu">
					<h2>ÖZEL MENÜ</h2>
					<ul>
						<li class="b1"><a class="icon settings" href="#">Yönetici Arayüzü Başlıkları</a></li>
						<li class="b2"><a class="icon settings" href="#">Kullanıcı Arayüzü Başlıkları</a></li>
					</ul>
				</div>
			<?php } ?>

			</div>
			<div id="RightSide">
				<?php
					$zone = get("zone");
					$do = get("do");
					if(file_exists("_includes/{$zone}") && $do){
						require("_includes/{$zone}/{$do}.php");
					}else{
						require("_includes/main.php");
					}
				?>
			</div>
			<div class="clear"></div>
		</div>
		<!-- CONTENTS ENDS -->

	</div>
	<!-- GENEL ENDS -->
	<!-- FOOTER STARTS -->
		<div id="Footer">
			&#169; 2013 - All Rights Reserved. | Coded by: <a href="http://www.suhaduran.com" target="_blank" title="Coded by Süha DURAN">Süha DURAN</a> | Powered by: <a href="http://www.networx-it.com" target="_blank" title="Powered by Networx-IT">Networx-IT</a> - <a href="http://www.cizgiajans.com" target="_blank" title="Powered by Çizgi Ajans">Çizgi Ajans</a>
		</div>
		<!-- FOOTER ENDS -->
</body>
</html>