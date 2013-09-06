<?php

	/*OLD*/
		// if($_POST){

		// 	require_once("../../../../config/config.php");
		// 	require_once("../../../../config/system.php");

		// 	$LangID = session("SMLID");
		// 	$PageTitle = post("PageTitle", true);
		// 	$PageSummary = post("PageSummary", true);
		// 	$PageContent = post("PageContent", true);
		// 	$PageDescription = post("PageDescription", true);
		// 	$PageKeywords = post("PageKeywords", true);
		// 	$PageStatus = post("PageStatus", true);
		// 	$PageSefLink = sefLink($PageTitle);

		// 	$isThere = sorgula("SELECT * FROM pages WHERE PageSefLink = '$PageSefLink'");
		// 	if(mysql_affected_rows()){
		// 		echo "SAMEPAGE";
		// 	}else{
		// 		$insert = sorgula("INSERT INTO pages SET
		// 			LangID = '$LangID',
		// 			PageTitle = '$PageTitle',
		// 			PageSummary = '$PageSummary',
		// 			PageContent = '$PageContent',
		// 			PageDescription = '$PageDescription',
		// 			PageKeywords = '$PageKeywords',
		// 			PageSefLink = '$PageSefLink',
		// 			PageStatus = '$PageStatus'
		// 			");

		// 		if(mysql_affected_rows()){
		// 			echo "OKAY";
		// 		}else{
		// 			echo "HATA";
		// 		}
		// 	}

		// }else{
		// 	echo "HOP!";
		// }
	/*OLD*/

	if(@$_POST["SubmitAddNewPage2"]){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");
		require_once("../../../_classes/class.upload.php");

		$LangID = session("SMLID");
		$foto = $_FILES['ProfilFoto'];
		$PageTitle = post("PageTitle", true);
		$PageSummary = post("PageSummary", true);
		$PageContent = post("PageContent", true);
		$PageDescription = post("PageDescription", true);
		$PageKeywords = post("PageKeywords", true);
		$PageStatus = post("PageStatus", true);
		$PageSefLink = sefLink($PageTitle);

		$isThere = sorgula("SELECT * FROM pages WHERE PageSefLink = '$PageSefLink'");
		if(mysql_affected_rows()){
				echo "SAMEPAGE";
		}else{
			$handle = new Upload($foto);
			if ($handle->uploaded) {
				/* Resmi Yeniden Adlandır */
				$handle->file_new_name_body = substr(base64_encode(uniqid(true)), 0, 20);
				/* Resmi Yeniden Boyutlandır */
				if ($handle->image_src_x > 700){
					$handle->image_x = 700;
					$handle->image_resize = true;
					$handle->image_ratio_y = true;
				}
				/* Resim Yükleme İzni */
				$handle->allowed = array('image/*');
				/* Resmi İşle */
				$handle->Process("../../../../_uploads/pages/profile/");
				$fotografYolu = "_uploads/pages/profile/".$handle->file_dst_name;
				/*İŞLEMLER BİTTİ.*/
				if ($handle->processed) {
					$insert = sorgula("INSERT INTO pages SET
						LangID = '$LangID',
						PageTitle = '$PageTitle',
						PageSummary = '$PageSummary',
						PageContent = '$PageContent',
						PageDescription = '$PageDescription',
						PageKeywords = '$PageKeywords',
						PageSefLink = '$PageSefLink',
						PageStatus = '$PageStatus',
						PageProfilePhoto = '$fotografYolu'
						");

					$sonID = mysql_insert_id();

					if($insert){
						echo '<form id="AddNewPageCropDone" action="_includes/pagemanagement/ajaxes/addNewPageWPhoto.php" method="post">
							<img src="'.URL.$fotografYolu.'" alt="" id="CropIt" />
							<input type="hidden" name="x" id="x" />
							<input type="hidden" name="y" id="y" />
							<input type="hidden" name="x2" id="x2" />
							<input type="hidden" name="y2" id="y2" />
							<input type="hidden" name="w" id="w" />
							<input type="hidden" name="h" id="h" />
							<input type="hidden" name="soneklenenID" value="'.$sonID.'" />
							<input type="hidden" name="resimlink" value="../../../../_uploads/pages/profile/'.$handle->file_dst_name.'" />
							<input type="submit" class="okay" value="KIRPMAYI BİTİR" name="SubmitAddNewPageCrop" id="SubmitAddNewPageCrop" />
							</form>';
					}else{
						$handle-> Clean();
					}
				}else{
					$handle-> Clean();
				}
				$handle-> Clean();
			} else {
				echo "HATA";
				$handle-> Clean();
			}
		}
		// if($handle->processed){
		// 	echo "OK";
		// 	$handle-> Clean();
		// }else{
		// 	echo "HATA";
		// 	$handle-> Clean();
		// }
	}else{
		echo "HOP!";
	}

	if (@$_POST["SubmitAddNewPageCrop"]){

		$x = $_POST["x"];
		$y = $_POST["y"];
		$x2 = $_POST["x2"];
		$y2 = $_POST["y2"];
		$w = $_POST["w"];
		$h = $_POST["h"];
		$sonekleneninID = $_POST["soneklenenID"];

		$kesilen = $_POST['resimlink'];
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
				$sorgum = "UPDATE hizmetler SET ProfilFoto = '$yenifotografYolu' WHERE PageID = '$sonekleneninID'";
				$update = sorgula($sorgum);
				if($update){
						bilgi(1,"Sayfa başarı ile kaydedildi. Sayfa listesine yönlendiriliyorsunuz..");
						yonlendir(URL."admin/index.php?do=servicepages",1);
					}else{
						bilgi(3,"Kaydetme işleminde hata oluştu. Lütfen daha sonra tekrar deneyiniz. UPDATE SORGU HATASI");
					}
			}else {
				bilgi(3,"Kaydetme işleminde hata oluştu. Lütfen daha sonra tekrar deneyiniz. CROP İŞLEMİ YAPILAMADI");
			}
			$kesildi->Clean();
		}else {
			bilgi(3,"Kaydetme işleminde hata oluştu. Lütfen daha sonra tekrar deneyiniz. DOSYA UPLOAD EDİLEMEDİ ".$kesilen."  ".$kesildi->error);
		}
		$kesildi->Clean();
	}
?>