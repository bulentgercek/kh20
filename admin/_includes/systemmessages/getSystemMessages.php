<?php

	if($_POST){

		require_once("../../../config/config.php");
		require_once("../../../config/system.php");

		$sistemdili = session("lang");
		if ($sistemdili == "tr") { include ("msg_tr.php"); }else if($sistemdili == "en"){ include ("msg_en.php");}

		$MessageCode = post("MessageCode", true);
		echo $ajaxcode[$MessageCode];

	}else{
		echo "HOP";
	}
 ?>