<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;

	if (get("lang") != "") {
		$yenidil = get("lang");
		$_SESSION["lang"] = $yenidil;
		yonlendir($_SERVER["HTTP_REFERER"]);
	}
 ?>