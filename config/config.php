<?php


	session_start();
	//ob_start("ob_gzhandler");
	ob_start();

	// Hataları Gizle
	error_reporting(0);

	// Tanımlamalar
	$veritabaniAdi = "kh20";
	$veritabaniAdresi = "localhost";
	$veritabaniYoneticisi = "root";
	$veritabaniSifre = "";

	// MySQL Bağlantısı
	$baglan = mysql_connect($veritabaniAdresi, $veritabaniYoneticisi, $veritabaniSifre) or die(mysql_error());
	$veritabani = mysql_select_db($veritabaniAdi, $baglan) or die(mysql_error());
	mysql_query("SET CHARACTER SET 'utf8'");
	mysql_query("SET NAMES 'utf8'");

	// Site Genel Ayarları
	$query = mysql_query("SELECT * FROM sitesettings");
	$siteayarlar = mysql_fetch_array($query);
	$sorgu = mysql_query("SELECT * FROM othersettings");
	$digerayarlar = mysql_fetch_array($sorgu);

	// Sabitler
	define("PATH",realpath("."));
	define("URL",$siteayarlar["SiteURL"]);
	// define("TEMA_URL", $siteayarlar["SiteURL"]."/themes/".$siteayarlar["SiteTheme"]);
	// define("TEMA", PATH."/themes/".$siteayarlar["SiteTheme"]);
	// define("TEMA_KLASOR", $siteayarlar["SiteTheme"]);
	define("SITE_BASLIK",$siteayarlar["SiteTitle"]);
	define("SITE_DESC",$siteayarlar["SiteDescription"]);
	define("SITE_KEYW",$siteayarlar["SiteKeyWords"]);
	define("SITE_MAIL",$siteayarlar["SiteEMail"]);
	define("PPP_W",$digerayarlar["PageProfilPhotoWidth"]);
	define("PPP_H",$digerayarlar["PageProfilPhotoHeight"]);
	define("SLD_W",$digerayarlar["SliderWidth"]);
	define("SLD_H",$digerayarlar["SliderHeight"]);

	//ob_end_flush();
?>