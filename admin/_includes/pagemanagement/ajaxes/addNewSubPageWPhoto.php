<?php
	if(@$_POST){

		require_once("../../../../config/config.php");
		require_once("../../../../config/system.php");
		require_once("../../../_classes/class.upload.php");

		$LangID = session("SMLID");
		$foto = $_FILES['PageProfilePhoto'];
		$SubPageID = post("SubPageID", true);
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
						SubPageID = '$SubPageID',
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
						echo '<form id="AddNewSubPageCropDone" action="_includes/pagemanagement/ajaxes/addNewSubPageWPhoto2.php" method="post">
							<img src="'.URL.$fotografYolu.'" alt="" id="CropIt" />
							<input type="hidden" name="x" id="x" />
							<input type="hidden" name="y" id="y" />
							<input type="hidden" name="x2" id="x2" />
							<input type="hidden" name="y2" id="y2" />
							<input type="hidden" name="w" id="w" />
							<input type="hidden" name="h" id="h" />
							<input type="hidden" name="soneklenenID" value="'.$sonID.'" />
							<input type="hidden" name="resimlink" value="../../../../_uploads/pages/profile/'.$handle->file_dst_name.'" />
							<input type="submit" class="okay" value="KIRPMAYI BİTİR" name="SubmitAddNewSubPageCrop" id="SubmitAddNewSubPageCrop" />
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
	}else{
		echo "HOP";
	}
?>