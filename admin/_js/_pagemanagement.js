$(function(){
/*PAGE MANAGEMENT TRANSACTIONS - STARTS*/
	/*ADD NEW PAGE WITH PROFILE PHOTO TRANSACTIONS - STARTS*/
		$("#SubmitAddNewPage").click(function(){
			var Page = $("input[name=RefererPage]").val();
			var Width = $("input[name=Width]").val();
			var Height = $("input[name=Height]").val();
			var PageTitle = $("input[name=PageTitle]").val();
			PageTitle = $.trim(PageTitle);
			var PageSummary = $("textarea[name=PageSummary]").val();
			PageSummary = $.trim(PageSummary);
			var PageContent = $("textarea[name=PageContent]").val();
			PageContent = $.trim(PageContent);
			var PageDescription = $("textarea[name=PageDescription]").val();
			PageDescription = $.trim(PageDescription);
			var PageKeywords = $("input[name=PageKeywords]").val();
			PageKeywords = $.trim(PageKeywords);
			var PageProfilePhoto = $("input[name=PageProfilePhoto]").val();
			var PageStatus = $("select[name=PageStatus]").val();
			PageStatus = $.trim(PageStatus);
			var degerler = "PageTitle=" + PageTitle + "&PageSummary=" + PageSummary + "&PageContent=" + PageContent + "&PageDescription=" + PageDescription + "&PageKeywords=" + PageKeywords + "&PageStatus=" + PageStatus;
			if(PageTitle == ""){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
				});
			}else{
				if(PageProfilePhoto == ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					$.ajax({
						type: "POST",
						url: "_includes/pagemanagement/ajaxes/addNewPage.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								});
							}else if(sonuc == "SAMEPAGE"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2500);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPageSaved"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){window.location=Page}, 1000);
								});
							}
						}
					});
				}else{
					$("#AddNewPageWPhoto").ajaxForm({
						beforeSend: function(){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
							});
						},
						uploadProgress:function(olay, yuklenen, toplam, yuzde){},
						complete: function(xhr){
							if(xhr.responseText == "SAMEPAGE"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2500);
								});
							}else if(xhr.responseText == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgBeforePagePhotoCrop"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data +"</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 1500);
								});
								$("div.main").html(xhr.responseText);
								$("#CropIt").Jcrop({
									onChange: showCoords,
									onSelect: showCoords,
									setSelect: [0,0,Width,Height],
									allowResize : true,
									aspectRatio: Width / Height,
									addClass: 'jcrop-dark'
								});
								function showCoords (c){
									$("#x").val(c.x);
									$("#y").val(c.y);
									$("#x2").val(c.x2);
									$("#y2").val(c.y2);
									$("#w").val(c.w);
									$("#h").val(c.h);
								}
							}
						}
					}).submit();
				}
			}
		});

		$("#SubmitAddNewPageCrop").click(function(){
			$("#AddNewPageCropDone").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPagePhotoCroppedOK"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}
				}
			});
		});
	/*ADD NEW PAGE WITH PROFILE PHOTO TRANSACTIONS - ENDS*/

	/*ADD NEW SUBPAGE WITH PROFILE PHOTO TRANSACTIONS - STARTS*/
		$("#SubmitAddNewSubPageWPhoto").click(function(){
			var Page = $("input[name=RefererPage]").val();
			var Width = $("input[name=Width]").val();
			var Height = $("input[name=Height]").val();
			var SubPageID = $("select[name=SubPageID]").val();
			SubPageID = $.trim(SubPageID);
			var PageTitle = $("input[name=PageTitle]").val();
			PageTitle = $.trim(PageTitle);
			var PageSummary = $("textarea[name=PageSummary]").val();
			PageSummary = $.trim(PageSummary);
			var PageContent = $("textarea[name=PageContent]").val();
			PageContent = $.trim(PageContent);
			var PageDescription = $("textarea[name=PageDescription]").val();
			PageDescription = $.trim(PageDescription);
			var PageKeywords = $("input[name=PageKeywords]").val();
			PageKeywords = $.trim(PageKeywords);
			var PageProfilePhoto = $("input[name=PageProfilePhoto]").val();
			var PageStatus = $("select[name=PageStatus]").val();
			PageStatus = $.trim(PageStatus);
			var degerler = "SubPageID=" + SubPageID + "&PageTitle=" + PageTitle + "&PageSummary=" + PageSummary + "&PageContent=" + PageContent + "&PageDescription=" + PageDescription + "&PageKeywords=" + PageKeywords + "&PageStatus=" + PageStatus;
			if(PageTitle == ""){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
				});
			}else{
				if(PageProfilePhoto == ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					$.ajax({
						type: "POST",
						url: "_includes/pagemanagement/ajaxes/addNewSubPage.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								});
							}else if(sonuc == "SAMEPAGE"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2500);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPageSaved"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show();
									setTimeout(function(){window.location=Page}, 1000);
								});
							}
						}
					});
				}else{
					$("#AddNewSubPageWPhoto").ajaxForm({
						beforeSend: function(){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
							});
						},
						uploadProgress:function(olay, yuklenen, toplam, yuzde){},
						complete: function(xhr){
							if(xhr.responseText == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show();
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgBeforePagePhotoCrop"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data +"</p>").show();
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 1500);
								});
								$("div.n_warning").remove();
								$("div.main").html(xhr.responseText);
								$("#CropIt").Jcrop({
									onChange: showCoords,
									onSelect: showCoords,
									setSelect: [0,0,Width,Height],
									allowResize : true,
									aspectRatio: Width / Height,
									addClass: 'jcrop-dark'
								});
								function showCoords (c){
									$("#x").val(c.x);
									$("#y").val(c.y);
									$("#x2").val(c.x2);
									$("#y2").val(c.y2);
									$("#w").val(c.w);
									$("#h").val(c.h);
								}
							}
						}
					}).submit();
				}
			}
		});

		$("#SubmitAddNewSubPageCrop").click(function(){
			$("#AddNewSubPageCropDone").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPagePhotoCroppedOK"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}
				}
			});
		})
	/*ADD NEW SUBPAGE WITH PROFILE PHOTO TRANSACTIONS - ENDS*/

	/*CHANGE STATUS PAGE TRANSACTIONS - STARTS*/
		$.changePageStatus = function(id){
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			var PageID = id;
			var degerler = "PageID=" + PageID;
			$.ajax({
				type: "POST",
				url: "_includes/pagemanagement/ajaxes/changePageStatus.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{location.reload();}
				}
			});
		}
	/*CHANGE STATUS PAGE TRANSACTIONS- ENDS*/

	/*DELETE PAGE TRANSACTIONS - STARTS*/
		$.deletePage = function(msg,id){
			if(confirm(msg)){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var PageID = id;
				var degerler = "PageID=" + PageID;
				$.ajax({
					type: "POST",
					url: "_includes/pagemanagement/ajaxes/deletePage.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgMissingPage"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
						}else{
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeletePage"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								location.reload();
							});
						}
					}
				});
			}else{

			}
		}
	/*DELETE PAGE TRANSACTIONS - ENDS*/

	/*UPDATE PAGE TRANSACTIONS - STARTS*/
		$("#SubmitUpdatePage").click(function() {
			var RefererPage = $("input[name=RefererPage]").val();
			var PageID = $("input[name=RefererPageID]").val();
			var Width = $("input[name=Width]").val();
			var Height = $("input[name=Height]").val();
			var PageTitle = $("input[name=PageTitle]").val();
			PageTitle = $.trim(PageTitle);
			var PageSummary = $("textarea[name=PageSummary]").val();
			PageSummary = $.trim(PageSummary);
			var PageContent = $("textarea[name=PageContent]").val();
			PageContent = $.trim(PageContent);
			var PageDescription = $("textarea[name=PageDescription]").val();
			PageDescription = $.trim(PageDescription);
			var PageKeywords = $("input[name=PageKeywords]").val();
			PageKeywords = $.trim(PageKeywords);
			var PageProfilePhoto = $("input[name=PageProfilePhoto]").val();
			var PageStatus = $("select[name=PageStatus]").val();
			PageStatus = $.trim(PageStatus);
			var degerler = "PageID=" + PageID + "&PageTitle=" + PageTitle + "&PageSummary=" + PageSummary + "&PageContent=" + PageContent + "&PageDescription=" + PageDescription + "&PageKeywords=" + PageKeywords + "&PageStatus=" + PageStatus;
			if(PageTitle == ""){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
						setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2000);
				});
			}else{
				if(PageProfilePhoto == ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").hide().removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					$.ajax({
						type: "POST",
						url: "_includes/pagemanagement/ajaxes/updatePage.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUpdateError"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								});
							}else if(sonuc == "SAMEPAGE"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2500);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPageUpdated"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){window.location=RefererPage}, 1000);
								});
							}
						}
					});
				}else{
					$("#UpdatePageWPhoto").ajaxForm({
						beforeSend: function(){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
							});
						},
						uploadProgress:function(olay, yuklenen, toplam, yuzde){},
						complete: function(xhr){
							if(xhr.responseText == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgBeforePagePhotoCrop"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data +"</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 1500);
								});
								$("div.main").html(xhr.responseText);
								$("#CropIt").Jcrop({
									onChange: showCoords,
									onSelect: showCoords,
									setSelect: [0,0,Width,Height],
									allowResize : true,
									aspectRatio: Width / Height,
									addClass: 'jcrop-dark'
								});
								function showCoords (c){
									$("#x").val(c.x);
									$("#y").val(c.y);
									$("#x2").val(c.x2);
									$("#y2").val(c.y2);
									$("#w").val(c.w);
									$("#h").val(c.h);
								}
							}
						}
					}).submit();
				}
			}
		});

		$("#SubmitUpdatePageCrop").click(function(){
			$("#UpdatePageCropDone").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPagePhotoCroppedOK"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}
				}
			});
		})
	/*UPDATE PAGE TRANSACTIONS - ENDS*/

	/*SORT PAGE TRANSACTIONS- STARTS*/
		$(".SayfalariSirala").sortable({
			opacity: 0.6,
			placeholder: "ui-state-highlight",
			handle : '.handle',
			update : function () {
				var order = $('.SayfalariSirala').sortable('serialize');
				$.get('_includes/pagemanagement/ajaxes/sortPages.php?'+order, function(data) {
					if(data == "OK"){}
				});
			}
		});
		$(".SayfalariSirala").disableSelection();
	/*SORT PAGE TRANSACTIONS - ENDS*/

	/*SORT SUBPAGE TRANSACTIONS- STARTS*/
		$(".AltSayfalariSirala").sortable({
			opacity: 0.6,
			placeholder: "ui-state-highlight",
			handle : '.handle',
			update : function () {
				var order = $('.AltSayfalariSirala').sortable('serialize');
				$.get('_includes/pagemanagement/ajaxes/sortPages.php?'+order, function(data) {
					if(data == "OK"){}
				});
			}
		});
		$(".AltSayfalariSirala").disableSelection();
	/*SORT SUBPAGE TRANSACTIONS - ENDS*/

	/*SHOW SUB PAGES FILTER TRANSACTIONS - STARTS*/
		$("#FilterPage").change(function(){
			var deger = $(this).val();
			if(deger == "EMPTY"){

			}else{
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var degerler = "PageID=" + deger;
				$.ajax({
					type: "POST",
					url: "_includes/pagemanagement/ajaxes/getSubPages.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgNoSubPage"}).done(function(data){
								$("#Sayfalar tr").not("#Sayfalar tr:eq(0)").html("");
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
						}else{
							$("#Sayfalar tr").not("#Sayfalar tr:eq(0)").html("");
							$(".main table#Sayfalar").append(sonuc);
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 1000);
						}
					}
				});

			}
		});
	/*SHOW SUB PAGES FILTER TRANSACTIONS - ENDS*/

	/*SHOW SUB PAGES2 FILTER TRANSACTIONS - STARTS*/
		$("#FilterPage2").change(function(){
			var deger = $(this).val();
			if(deger == "EMPTY"){

			}else{
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var degerler = "PageID=" + deger;
				$.ajax({
					type: "POST",
					url: "_includes/pagemanagement/ajaxes/getSubPages2.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgNoSubPage"}).done(function(data){
								$("ul.AltSayfalariSirala").html("");
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
						}else{
							$("ul.AltSayfalariSirala").html("");
							$("ul.AltSayfalariSirala").append(sonuc);
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 1000);
						}
					}
				});
			}
		});
	/*SHOW SUB PAGES2 FILTER TRANSACTIONS - ENDS*/

	/*ADD PAGE PHOTOS TRANSACTIONS - STARTS*/
		$("#SubmitPagePhotos").click(function(){
			$("#PagePhotoUpload").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "OK"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPagePhotosUploaded"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUploadError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}
				}
			});
		});
	/*ADD PAGE PHOTOS TRANSACTIONS - ENDS*/

	/*SORT PAGE PHOTOS TRANSACTIONS- STARTS*/
		$(".SortPagePhotos").sortable({
			opacity: 0.6,
			placeholder: "ui-state-highlight",
			handle : '.handle',
			update : function () {
				var order = $('.SortPagePhotos').sortable('serialize');
				$.get('_includes/pagemanagement/ajaxes/sortPagePhotos.php?'+order, function(data) {
					if(data == "OK"){}
				});
			}
		});
		$(".SortPagePhotos").disableSelection();
	/*SORT PAGE PHOTOS TRANSACTIONS - ENDS*/

	/*DELETE PAGE PHOTO TRANSACTIONS - STARTS*/
		$.deletePagePhoto = function(msg,id){
			if(confirm(msg)){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var PhotoID = id;
				var degerler = "PhotoID=" + PhotoID;
				$.ajax({
					type: "POST",
					url: "_includes/pagemanagement/ajaxes/deletePagePhoto.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeleteError"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
						}else{
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');$("li#listItem_"+PhotoID).remove();}, 1500);
						}
					}
				});
			}else{}
		}
	/*DELETE PAGE PHOTO TRANSACTIONS- ENDS*/

	/*DELETE ALL PAGE PHOTOS TRANSACTIONS - STARTS*/
		$.deleteAllPagePhotos = function(msg,id){
			if(confirm(msg)){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var PageID = id;
				$.post("_includes/pagemanagement/ajaxes/deleteAllPagePhotos.php", {PageID:PageID}).done(function(data){
					if(data == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeleteError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgAllPagePhotosDeleted"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show();
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');location.reload();}, 1500);
						});
					}
				});
			}else{

			}
		}
	/*DELETE ALL PAGE PHOTOS TRANSACTIONS- ENDS*/

	/*CHANGE STATUS PAGE PHOTO TRANSACTIONS - STARTS*/
		$.changePagePhotoStatus = function(id){
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			var PhotoID = id;
			var degerler = "PhotoID=" + PhotoID;
			$.ajax({
				type: "POST",
				url: "_includes/pagemanagement/ajaxes/changePagePhotoStatus.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{location.reload();}
				}
			});
		}
	/*CHANGE STATUS PAGE PHOTO TRANSACTIONS- ENDS*/

	/*UPDATE PAGE PHOTO INFO TRANSACTIONS - STARTS*/
		$("#SubmitUpdatePagePhoto").click(function(){
			var PhotoID = $("input[name=PhotoID]").val();
			PhotoID = $.trim(PhotoID);
			var PhotoName = $("input[name=PhotoName]").val();
			PhotoName = $.trim(PhotoName);
			var PhotoDescription = $("input[name=PhotoDescription]").val();
			PhotoDescription = $.trim(PhotoDescription);
			var Page = $("input[name=RefererPage]").val();
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			var degerler = "PhotoID=" + PhotoID + "&PhotoName=" + PhotoName + "&PhotoDescription=" + PhotoDescription;
			$.ajax({
				type: "POST",
				url: "_includes/pagemanagement/ajaxes/updatePagePhotoDetails.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUpdateError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{window.location = Page;}
				}
			});
		});
	/*UPDATE PAGE PHOTO INFO TRANSACTIONS - ENDS*/
/*PAGE MANAGEMENT TRANSACTIONS - ENDS*/
});