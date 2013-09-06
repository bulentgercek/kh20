<?php

	// require_once("class.upload.php");
	// echo !defined("GUVENLIK") ? die("ACCESS DENIED!!") : null;

	// Veritabanı Sorgu Fonksiyonu
	function sorgula($command){
		return mysql_query($command);
	}

	// Veritabanın Gelen Satırlar Fonksiyonu
	function gelen($command){
		return mysql_fetch_array($command);
	}

	// Veritabanı Gelen Satır Sayısı Fonksiyonu
	function satirsayisi($command){
		return mysql_num_rows($command);
	}

	// stripslashes Kısaltma Fonksiyonu
	function ss($par){
		return stripcslashes($par);
	}

	// Klasör Listeleme Fonksiyonu - DropDown Menü İçin
	function klasorListele($klasorAdi){
		$klasorAc = opendir($klasorAdi) or die("Dizin Bulunamadı!");
		while ($klasor = readdir($klasorAc)){
			if (is_dir($klasorAdi."/".$klasor) && $klasor != '.' && $klasor != '..'){
				echo "<option ";
				echo $klasor == TEMA_KLASOR ? 'selected' : null;
				echo " value='{$klasor}'>{$klasor}</option>";
			}
		}
	}

	//SEFLINK Fonksiyonu
	function sefLink($baslik){
		$baslik = str_replace(array("&quot;","&#39;"), NULL, $baslik);
		$bul = array('Ç', 'Ş', 'Ğ', 'Ü', 'İ', 'Ö', 'ç', 'ş', 'ğ', 'ü', 'ö', 'ı', '-');
		$yap = array('c', 's', 'g', 'u', 'i', 'o', 'c', 's', 'g', 'u', 'o', 'i', ' ');
		$perma = strtolower(str_replace($bul, $yap, $baslik));
		$perma = preg_replace("@[^A-Za-z0-9\-_]@i", ' ', $perma);
		$perma = trim(preg_replace('/\s+/',' ', $perma));
		$perma = str_replace(' ', '-', $perma);
		return $perma;
	}

	//Bilgi Mesajı Gösterme Fonksiyonu - 1=OK 2=UYARI 3=HATA
	function bilgi($mcode, $message){
		if($mcode == 1){
			echo '<div style="display: block !important;" class="n_ok"><p>'.$message.'</p></div>';
		}else if($mcode == 2){
			echo '<div style="display: block !important;" class="n_warning"><p>'.$message.'</p></div>';
		}else{
			echo '<div style="display: block !important;" class="n_error"><p>'.$message.'</p></div>';
		}
	}

	// Hata Mesajı Fonksiyonu
	function mesaj($parametre){
		$mesaj = 'Veritabanında '.$parametre.' bulunmamaktadır.';
		return $mesaj;
	}

	// $_POST Kısayol Fonksiyonu
	function post($par, $st = false){
		if ($st) {
			return htmlspecialchars(addslashes(trim($_POST[$par])));
		}else{
			return addslashes(trim($_POST[$par]));
		}
	}

	// $_GET Kısayol Fonksiyonu
	function get($par){
		return strip_tags(trim(addslashes($_GET[$par])));
	}

	// Yönlendirme Fonksiyonu
	function yonlendir($par, $time = 0){
		if ($time == 0) {
			header("Location: {$par}");
		}else{
			header("Refresh: {$time}; url={$par}");
		}
	}

	// Yazı Kısaltma Fonksiyonu
	function yaziKisalt($str, $start, $lenght ){
		if (strlen($str) > $lenght) {
			if (function_exists('mb_substr')) {
				$str = mb_substr($str, $start, $lenght, 'utf-8').'...';
			}else{
				$str = substr($str, $start, $limit).'...';
			}
		}
		return $str;
	}

	// Session Oluşturma Fonksiyonu
	function session($par){
		if ($_SESSION[$par]) {
			return $_SESSION[$par];
		}else{
			return false;
		}
	}

	// Session Başlatma Fonksiyonu
	function sessionBaslat($par){
		foreach ($par as $key => $value) {
			$_SESSION[$key] = $value;
		}
	}

	// Otomatik Linklendirme Fonksiyonu
	function otoLink($yazi) {
		// http seklindekiler
		$yazi = preg_replace("#([\n ])([a-z]+?)://([a-z0-9\-\.,\?!%\*_\#:;~\\&$@\/=\+]+)#ie",
		"'\\1<a target=\"_blank\" href=\"\\2://\\3\" >\\2://\\3</a>'", $yazi);
		// www seklindekiler
		$yazi = preg_replace("#([\n ])www\.([a-z0-9\-]+)\.([a-z0-9\-.\~]+)((?:/[a-z0-9\-\.,\?!%\*_\#:;~\\&$@\/=\+]*)?)#i",
		"\\1<a target=\"_blank\" href=\"http://www.\\2.\\3\\4\">www.\\2.\\3\\4</a>", $yazi);
		// epostalar
		$yazi = preg_replace("#([\n ])([a-z0-9\-_.]+?)@([\w\-]+\.([\w\-\.]+\.)?[\w]+)#i",
		"\\1<a target=\"_blank\" href=\"mailto:\\2@\\3\">\\2@\\3</a>", $yazi);
		return($yazi);
	}

	// Random Şifre Oluşturma Fonksiyonu
	function randomPassword(){
		$string = "ABCDEFGHIJKLMNOPRSTUWXYZ123456789";
		for($i=0;$i<10;$i++){
		   $pos = rand(0,32);
		   $str .= $string{$pos};
		}
		return $str;
	}

?>