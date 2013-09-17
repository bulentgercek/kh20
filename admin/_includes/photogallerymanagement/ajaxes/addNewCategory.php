<?php

	if($_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");
		require_once("../../../_classes/class.upload.php");

		$LangID = session("SMLID");
		$CategoryName = post("CategoryName");



	}else{
		echo "HOP!";
	}
 ?>