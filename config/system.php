<?php

	require_once("functions.php");

/*ADMIN SAYFASI FONKSİYONLARI*/

/*GENEL FONKSİYONLAR - BAŞLANGIÇ*/

// Tema İçerik Fonksiyonu
	function Icerik(){
		$sayfa = get("page");
		switch ($sayfa) {
			case 'icerik':
				require_once "includes/icerik.php";
			break;

			case 'home':
				require_once "includes/default.php";
			break;

			default:
				require_once "includes/default.php";
			break;
		}
	}

	// Tırnak Değiştirme Fonksiyonu
	function tirnakrep($par)
	{
		return str_replace(
			array(
				"'", "\""
				),
			array(
				"&#39;", "&quot;"
			),
			$par
		);
	}

	//array_map("tirnak_replace", $_POST)

	// Kullanıcının IPsi
	function GetUserIP(){
		if(getenv("HTTP_CLIENT_IP")) {
	 		$ip = getenv("HTTP_CLIENT_IP");
	 	} elseif(getenv("HTTP_X_FORWARDED_FOR")) {
	 		$ip = getenv("HTTP_X_FORWARDED_FOR");
	 		if (strstr($ip, ',')) {
	 			$tmp = explode (',', $ip);
	 			$ip = trim($tmp[0]);
	 		}
	 	} else {
	 		$ip = getenv("REMOTE_ADDR");
	 	}
		return $ip;
	}

	//Hava Durumu Fonksiyonu (DMİ)
	function havaDurumu(){
		$sorgu = sorgula("SELECT * FROM weather INNER JOIN wcities ON weather.CityID = wcities.CityID");
		if(mysql_affected_rows()){
			$hava = gelen($sorgu);
			if ($hava["Status"] == 0) {
				if ($hava["Language"] == 'tr') {
					echo '<img src="http://www.mgm.gov.tr/sunum/sondurum-show-2.aspx?m='.$hava["CityValue"].'&rC='.$hava["BorderColor"].'&rZ='.$hava["BackColor"].'" style="width:'.$hava["Width"].'; height:'.$hava["Height"].';" alt="'.$hava["CityValue"].'" title="'.$hava["CityName"].' Hava Durumu" />';
				}else{
					echo '<img src="http://www.mgm.gov.tr/sunum/sondurum-show-2-en.aspx?m='.$hava["CityValue"].'&rC='.$hava["BorderColor"].'&rZ='.$hava["BackColor"].'" style="width:'.$hava["Width"].'; height:'.$hava["Height"].';" alt="'.$hava["CityValue"].'" title="Weather in '.$hava["CityName"].'" />';
				}
			}else{
				if ($hava["Language"] == 'tr') {
					echo '<img src="http://www.mgm.gov.tr/sunum/tahmin-show-2.aspx?m='.$hava["CityValue"].'&basla='.$hava["Start"].'&bitir='.$hava["Finish"].'&rC='.$hava["BorderColor"].'&rZ='.$hava["BackColor"].'" style="width:'.$hava["Width"].'; height:'.$hava["Height"].';" alt="'.$hava["CityValue"].'" title="'.$hava["CityName"].' Hava Durumu" />';
				}else{
					echo '<img src="http://www.mgm.gov.tr/sunum/tahmin-show-2-en.aspx?m='.$hava["CityValue"].'&basla='.$hava["Start"].'&bitir='.$hava["Finish"].'&rC='.$hava["BorderColor"].'&rZ='.$hava["BackColor"].'" style="width:'.$hava["Width"].'; height:'.$hava["Height"].';" alt="'.$hava["CityValue"].'" title="Weather in '.$hava["CityName"].'" />';
				}
			}
		}
		else{
			bilgi(2,"Hava durumu bilgisi bulunmamaktadır..");
		}
	}

	//Twitter - Son Tweetler Fonksiyonu
	function sonTweetler(){

		$sorgu = sorgula("SELECT * FROM twitter");
		$gelen = gelen($sorgu);

		$kullaniciAdi = $gelen["TwitterUserName"];
		$tweetSayisi = $gelen["TweetCount"];
		$consumerKey = $gelen["ConsumerKey"];
		$consumerSecret = $gelen["ConsumerSecret"];
		$accessToken = $gelen["AccessToken"];
		$accessTokenSecret = $gelen["AccessTokenSecret"];
		$tweetTarihi = $gelen["TweetDate"];
		$twitterDurumu = $gelen["TwitterStatus"];

		require "twitteroauth/twitteroauth.php";

		$twitter = new TwitterOAuth($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);
		$tweets = $twitter->get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='.$kullaniciAdi.'&count='.$tweetSayisi);

		if($gelen["TweetDate"] == 1){
			foreach ( $tweets as $tweet ){
				$text = $tweet->text;
				$created_at = date("Y-m-d H:i:s", strtotime($tweet->created_at));
				// echo '<a href="https://twitter.com/'.$username.'/statuses/'.$id.'" target="_blank">
				// 	'.nl2br($text).'<br />
				// 	'.$created_at.' - #'.$id.'
				// </a>
				// <hr />';
				echo "<li>".otoLink($text)." | <span class=\"tweetdate\">Tarih: ".$created_at."</span></li>\n";
			}
		}else{
			foreach ( $tweets as $tweet ){
				$text = $tweet->text;
				echo "<li>".otoLink($text)."</li>\n";
			}
		}

	}

	//Twitter - Son Tweetler Fonksiyonu
	/*
	function sonTweetler($screenname, $lasttweetcount, $date){

		$kullaniciadi = $screenname;
		$tweetsayisi = $lasttweetcount;

		if(!$xml=simplexml_load_file('http://api.twitter.com/1/statuses/user_timeline.xml?screen_name=' .$kullaniciadi. '&count=' .$tweetsayisi. '')){
			trigger_error('XML dosyasını okurken hata meydana geldi.',E_USER_ERROR);
		}

		if($date){
			foreach($xml as $user){
				echo "<li>".otoLink($user->text)." | <span class=\"tweetdate\">Tarih: ".$user->created_at."</span></li>\n";
				//echo "<li>".$user->text." | <span class=\"tweetdate\">Tarih: ".$user->created_at."</span></li>\n";
			}
		}else{
			foreach($xml as $user){
				echo "<li>".otoLink($user->text)."</li>\n";
				//echo "<li>".$user->text."</li>\n";
			}
		}
	}
	*/

	// Türkçe Tarih Fonksiyonu
	function turkcetarih($f, $zt = 'now'){
		$z = date("$f", strtotime($zt));
		$donustur = array(
			'Monday'		=> 'Pazartesi',
			'Tuesday'		=> 'Salı',
			'Wednesday'	=> 'Çarşamba',
			'Thursday'	=> 'Perşembe',
			'Friday'		=> 'Cuma',
			'Saturday'	=> 'Cumartesi',
			'Sunday'		=> 'Pazar',
			'January'		=> 'Ocak',
			'February'	=> 'Şubat',
			'March'		=> 'Mart',
			'April'		=> 'Nisan',
			'May'		=> 'Mayıs',
			'June'		=> 'Haziran',
			'July'		=> 'Temmuz',
			'August'		=> 'Ağustos',
			'September'	=> 'Eylül',
			'October'		=> 'Ekim',
			'November'	=> 'Kasım',
			'December'	=> 'Aralık',
			'Mon'		=> 'Pts',
			'Tue'		=> 'Sal',
			'Wed'		=> 'Çar',
			'Thu'		=> 'Per',
			'Fri'		=> 'Cum',
			'Sat'		=> 'Cts',
			'Sun'		=> 'Paz',
			'Jan'		=> 'Oca',
			'Feb'		=> 'Şub',
			'Mar'		=> 'Mar',
			'Apr'		=> 'Nis',
			'Jun'		=> 'Haz',
			'Jul'		=> 'Tem',
			'Aug'		=> 'Ağu',
			'Sep'		=> 'Eyl',
			'Oct'		=> 'Eki',
			'Nov'		=> 'Kas',
			'Dec'		=> 'Ara',
		);
		foreach($donustur as $en => $tr){
			$z = str_replace($en, $tr, $z);
		}
		if(strpos($z, 'Mayıs') !== false && strpos($f, 'F') === false) $z = str_replace('Mayıs', 'May', $z);
		return $z;
	}

/*GENEL FONKSİYONLAR - BİTİŞ*/

/*BLOG FONKSİYONLARI - BAŞLANGIÇ*/

	// Blog Sayfalama Fonksiyonu
	function blogSayfalama(){
		$sayfa = get("s") ? get("s") : 1;
		$kayitsayisi = satirsayisi(sorgula("SELECT BlogID FROM blog WHERE BlogStatus = 1"));
		$limit = 2;
		$sayfasayisi = ceil($kayitsayisi / $limit);
		if($kayitsayisi > $limit){
			$oncekiSayfa = $sayfa > 0 ? $sayfa - 1 : 1;
			$onceki = URL.'/blog/page/'.$oncekiSayfa;
			$sonrakiSayfa = $sayfa < $sayfasayisi ? $sayfa + 1 : $sayfasayisi;
			$sonraki = URL.'/blog/page/'.$sonrakiSayfa;
			include TEMA."/blogpagination.php";
		}
	}

	/*KATEGORİ FONKSİYONLARI - BAŞLANGIÇ*/
		function kategorileriListele(){
			$sorgu = sorgula("SELECT * FROM categories ORDER BY CategoryName ASC");
			while ($gelen = gelen($sorgu)) {
				echo '<li><a href="'.URL.'/kategori/'.$gelen["CategoryLink"].'">'.ss($gelen["CategoryName"]).'</a></li>';
			}
		}
	/*KATEGORİ FONKSİYONLARI - BİTİŞ*/

/*BLOG FONKSİYONLARI - BİTİŞ*/

?>