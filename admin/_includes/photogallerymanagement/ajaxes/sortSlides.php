<?php
	require_once("../../../../config/config.php");
	require_once("../../../../config/system.php");
	foreach ($_GET['listItem'] as $position => $item) { $sorgu = sorgula("UPDATE slides SET SlideOrder = '$position' WHERE SlideID = '$item'"); }
	echo "OK";
?>