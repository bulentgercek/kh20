<?php

if (@$_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");
		require_once("../../../_classes/class.upload.php");

		$x = $_POST["x"];
		$y = $_POST["y"];
		$x2 = $_POST["x2"];
		$y2 = $_POST["y2"];
		$w = $_POST["w"];
		$h = $_POST["h"];
		$sonekleneninID = $_POST["soneklenenID"];
		$RefererPage = $_POST["RefererPage"];

		$kesilen = $_POST["resimlink"];
		$kesildi = new Upload($kesilen);
		if ($kesildi->uploaded){
			$kesildi->file_new_name_body = substr(base64_encode(uniqid(true)), 0, 20);
			$resimWidth = $kesildi->image_src_x - $x2;
			$resimYukseklik = $kesildi->image_src_y - $y2;
			$kesildi->image_crop = "{$y} {$resimWidth} {$resimYukseklik} {$x}";
			$kesildi->allowed = array('image/*'); // sadece resimler kabul edilsin
			$kesildi->Process("../../../../_uploads/pages/profile/");
			$yenifotografYolu = "_uploads/pages/profile/".$kesildi->file_dst_name;
			if ($kesildi->processed){
				$sorgum = "UPDATE pages SET PageProfilePhoto = '$yenifotografYolu' WHERE PageID = '$sonekleneninID'";
				$update = sorgula($sorgum);
				if($update){
					yonlendir($RefererPage);
				}else{

				}
			}else {

			}
			$kesildi->Clean();
		}else{
			echo "HATA";
			$kesildi->Clean();
		}
	}else{
		echo "HOP";
	}

 ?>