<?php

	if(@$_POST["submit"]){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");
		require_once("../../../_classes/class.upload.php");

		$LangID = session("SMLID");
		$PageID = post("PageID",true);

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
				$handle->image_x = 800;
				$handle->image_ratio_y = true;
				/* Resim Yükleme İzni */
				$handle->allowed = array('image/*');
				/* Resmi İşle */
				$handle->Process("../../../../_uploads/pages/photos/");
				$fotografYolu = "_uploads/pages/photos/".$handle->file_dst_name;
				/*THUMBS*/
				/* Resmi Yeniden Adlandır */
				$handle->file_new_name_body = "TH-".substr(base64_encode(uniqid(true)), 0, 20);
				/* Resmi Yeniden Boyutlandır */
				$handle->image_resize = true;
				$handle->image_x = 250;
				$handle->image_y = 205;
				/* Resim Yükleme İzni */
				$handle->allowed = array('image/*');
				/* Resmi İşle */
				$handle->Process("../../../../_uploads/pages/photos/thumbs/");
				$fotografTHYolu = "_uploads/pages/photos/thumbs/".$handle->file_dst_name;
				/*İŞLEMLER BİTTİ.*/
				if($handle->processed){
					$insert = sorgula("INSERT INTO pagephotos SET
								PageID = '$PageID',
								PhotoPath = '$fotografYolu',
								PhotoTHPath = '$fotografTHYolu'
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