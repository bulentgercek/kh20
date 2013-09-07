<?php
	require_once("../../../../config/config.php");
	require_once("../../../../config/system.php");
	foreach ($_GET['listItem'] as $position => $item) { $sorgu = sorgula("UPDATE pagephotos SET PhotoOrder = '$position' WHERE PhotoID = '$item'"); }
	echo "OK";
?>