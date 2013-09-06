<?php
	echo !defined("ZUBIZARETTA") ? die("Hop dedik!") : null;
	session_destroy();
	yonlendir(URL."admin/login.php");
?>