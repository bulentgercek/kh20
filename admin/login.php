<?php
	require_once("../config/config.php");
	require_once("../config/system.php");
?>
<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Gala Yaşam | Yönetim Paneli : Giriş</title>

	<!-- Stylesheets -->
	<link href='http://fonts.googleapis.com/css?family=Didact+Gothic&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="_css/login.css">
	<script src="_js/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="_js/md5.js" type="text/javascript"></script>
	<script src="_js/login.js" type="text/javascript"></script>

	<!-- Optimize for mobile devices -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

	<!-- TOP BAR -->
	<div id="top-bar">

		<div class="page-full-width">

			<a href="../" class="round button dark ic-left-arrow image-left ">Siteye Geri Dön</a>

		</div> <!-- end full-width -->

	</div> <!-- end top-bar -->



	<!-- HEADER -->
	<div id="header">

		<div class="page-full-width cf">

			<div id="login-intro" class="fl">

				<h1>YÖNETİM PANELİ GİRİŞİ</h1>
				<h5>Lütfen giriş bilgilerinizi giriniz..</h5>

			</div> <!-- login-intro -->

			<!-- Change this image to your own company's logo -->
			<!-- The logo will automatically be resized to 39px height. -->
			<a href="#" id="company-branding" class="fr"><img src="images/logo.png" alt="Rüyakent Sitesi" /></a>

		</div> <!-- end full-width -->

	</div> <!-- end header -->



	<!-- MAIN CONTENT -->
	<div id="content">
		<form action="#" method="POST" id="login-form" onsubmit="return false">

			<fieldset id="Giris">

				<p>
					<label for="login-username">KULLANICI ADI</label>
					<input type="text" id="username" name="username" class="round full-width-input" autofocus />
				</p>

				<p>
					<label for="login-password">ŞİFRE</label>
					<input type="password" id="password" name="password" class="round full-width-input" />
				</p>

				<p><span id="SifreTalebi" style="cursor:pointer;">ŞİFRENİZİ Mİ UNUTTUNUZ?.</span></p>

				<input id="Girisbuton" class="button round blue image-right ic-right-arrow" type="submit" name="submit" value="GİRİŞ YAP">
			</fieldset>

			<fieldset id="Sifre" style="display:none;">
				<p><br><br>Lütfen sisteme kayıtlı olduğunuz e-posta adresinizi giriniz.</p>
				<p>
					<label for="login-username">E-POSTA</label>
					<input type="text" id="useremail" name="useremail" class="round full-width-input" autofocus />
				</p>
				<input id="Sifrebuton" class="button round blue image-right ic-right-arrow" type="submit" name="submit" value="ŞİFREMİ SIFIRLA">
			</fieldset>

			<div style="display:none" id="GirisMesaj"></div>
		</form>







	</div> <!-- end content -->



	<!-- FOOTER -->
	<div id="footer">

		<p>Paneldeki tüm fonksiyonların çalışması ve en iyi şekilde görüntüyü almak için <a href="http://www.google.com/intl/tr/chrome/" target="_blank">Google Chrome</a> kullanın..</p>
		<p>&copy; Copyright 2013 KH20 Project - Tüm hakları saklıdır.</p>
		<p>Powered by <a href="http://www.cizgiajans.com" target="_blank">Çizgi Ajans</a></p>

	</div> <!-- end footer -->

</body>
</html>