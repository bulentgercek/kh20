<?php
	require_once("../../../../config/config.php");
	require_once("../../../../config/system.php");
	foreach ($_GET['listItem'] as $position => $item) { $sorgu = sorgula("UPDATE pages SET PageOrder = '$position' WHERE PageID = '$item'"); }
	echo "OK";
?>