<?php

	if(@$_POST["submit"]){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");
		require_once("../../../_classes/class.upload.php");

		$LangID = session("SMLID");

		$resimler = array();
		foreach ($_FILES['resim'] as $k => $l) {
		  foreach ($l as $i => $v) {
			if (!array_key_exists($i, $resimler))
			  $resimler[$i] = array();
			$resimler[$i][$k] = $v;
		  }
		}
		foreach ($resimler as $resim){
			$handle = new Upload($resim);
			if ($handle->uploaded) {
				/* Resmi Yeniden Adlandır */
				$handle->file_new_name_body = substr(base64_encode(uniqid(true)), 0, 20);
				/* Resmi Yeniden Boyutlandır */
				$handle->image_resize = true;
				$handle->image_x = SLD_W;
				$handle->image_y = SLD_H;
				/* Resim Yükleme İzni */
				$handle->allowed = array('image/*');
				/* Resmi İşle */
				$handle->Process("../../../../_uploads/slides/");
				$fotografYolu = "_uploads/slides/".$handle->file_dst_name;
				/*THUMBS*/
				/* Resmi Yeniden Adlandır */
				$handle->file_new_name_body = "TH-".substr(base64_encode(uniqid(true)), 0, 20);
				/* Resmi Yeniden Boyutlandır */
				$handle->image_resize = true;
				$handle->image_x = SLD_W / 2;
				$handle->image_y = SLD_H / 2;
				/* Resim Yükleme İzni */
				$handle->allowed = array('image/*');
				/* Resmi İşle */
				$handle->Process("../../../../_uploads/slides/thumbs/");
				$fotografTHYolu = "_uploads/slides/thumbs/".$handle->file_dst_name;
				/*İŞLEMLER BİTTİ.*/
				if($handle->processed){
					$insert = sorgula("INSERT INTO slides SET
								SlidePath = '$fotografYolu',
								SlideTHPath = '$fotografTHYolu',
								LangID = '$LangID'
								");
					$handle-> Clean();
				}else{
					$handle-> Clean();
				}
			}else{
				echo "HATA";
				$handle-> Clean();
			}
		}
		if($handle->processed){
			echo "OK";
			$handle-> Clean();
		}else{
			echo "HATA";
			$handle-> Clean();
		}
	}else{
		echo "HOP!";
	}
 ?>