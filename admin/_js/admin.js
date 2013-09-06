$(function(){

	/*CKEDITOR INITIALIZE*/
	$("textarea.Editor").ckeditor();

	/*SOCIAL NETWORK TRANSACTIONS - STARTS*/
		$("#SocialNetworkSubmit").click(function(){
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#InfoSocialNetwork").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			var Facebook = $("input[name=Facebook]").val();
			Facebook = $.trim(Facebook);
			var Twitter = $("input[name=Twitter]").val();
			Twitter = $.trim(Twitter);
			var Google = $("input[name=Google]").val();
			Google = $.trim(Google);
			var Pinterest = $("input[name=Pinterest]").val();
			Pinterest = $.trim(Pinterest);
			var degerler = "Facebook=" + Facebook + "&Twitter=" + Twitter + "&Google=" + Google + "&Pinterest=" + Pinterest;
			$.ajax({
				type: "POST",
				url: "_includes/sitesettings/ajaxes/updateSocialNetwork.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
							$("#InfoSocialNetwork").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#InfoSocialNetwork").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessSuccesfull"}).done(function(data){
							$("#InfoSocialNetwork").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#InfoSocialNetwork").hide('slow');}, 2000);
							location.reload();
						});
					}
				}
			});
		});
	/*SOCIAL NETWORK TRANSACTIONS - ENDS*/

	/*SITE SETTINGS TRANSACTIONS - STARTS*/
		$("#SubmitSiteSettings").click(function(){
			var SiteTitle = $("input[name=SiteTitle]").val();
			SiteTitle = $.trim(SiteTitle);
			var SiteURL = $("input[name=SiteURL]").val();
			SiteURL = $.trim(SiteURL);
			var SiteDescription = $("textarea[name=SiteDescription]").val();
			SiteDescription = $.trim(SiteDescription);
			var SiteKeywords = $("input[name=SiteKeywords]").val();
			SiteKeywords = $.trim(SiteKeywords);
			var SiteStatus = $("select[name=SiteStatus]").val();
			SiteStatus = $.trim(SiteStatus);
			if(SiteTitle == "" || SiteURL == ""){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
					$("#InfoSiteSettings").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					setTimeout(function(){$("#InfoSiteSettings").hide('slow');}, 3000);
				});
			}else{
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoSiteSettings").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					// setTimeout(function(){$("#InfoSiteSettings").hide('slow');}, 3000);
				});
				var degerler = "SiteTitle=" + SiteTitle + "&SiteURL=" + SiteURL + "&SiteDescription=" + SiteDescription + "&SiteKeywords=" + SiteKeywords + "&SiteStatus=" + SiteStatus;

				$.ajax({
					type: "POST",
					url: "_includes/sitesettings/ajaxes/updateSiteSettings.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
								$("#InfoSiteSettings").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoSiteSettings").hide('slow');}, 3000);
							});
						}else{
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessSuccesfull"}).done(function(data){
								$("#InfoSiteSettings").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoSiteSettings").hide('slow');}, 2000);
								location.reload();
							});
						}
					}
				});
			}
		});
	/*SITE SETTINGS TRANSACTIONS - ENDS*/

	/*SITE MAIN LANGUAGE FILTER - STARTS*/
		$("#SiteMainLanguage").change(function(){
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			var dilkodu = $(this).val();
			var degerler = "LangID=" + dilkodu;
			$.ajax({
				type: "POST",
				url: "_includes/mainsettings/changesitelang.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgMainLanguageChanged"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2000);
							location.reload();
						});
					}
				}
			});
		});
	/*SITE MAIN LANGUAGE FILTER - ENDS*/

	/*PAGE MANAGEMENT TRANSACTIONS - STARTS*/
		/*ADD NEW PAGE TRANSACTIONS - STARTS*/
			$("#SubmitAddNewPage").click(function(){
				var Page = $("input[name=RefererPage]").val();
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
				var PageStatus = $("select[name=PageStatus]").val();
				PageStatus = $.trim(PageStatus);
				var degerler = "PageTitle=" + PageTitle + "&PageSummary=" + PageSummary + "&PageContent=" + PageContent + "&PageDescription=" + PageDescription + "&PageKeywords=" + PageKeywords + "&PageStatus=" + PageStatus;
				if(PageTitle == ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
						setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
					});
				}else{
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					$.ajax({
						type: "POST",
						url: "_includes/pagemanagement/ajaxes/addNewPage.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
								});
							}else if(sonuc == "SAMEPAGE"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 2500);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPageSaved"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){window.location=Page}, 1000);
								});
							}
						}
					});
				}
			});
		/*ADD NEW PAGE TRANSACTIONS - ENDS*/

		$("#SubmitAddNewPage2").click(function(){
			var Page = $("input[name=RefererPage]").val();
			var PageTitle = $("input[name=PageTitle]").val();
			PageTitle = $.trim(PageTitle);

			$("#AddNewPageWPhoto").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "SAMEPAGE"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
							$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 2500);
						});
					}else if(xhr.responseText == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
							$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
						});
					}else{
						$("div.main").html(xhr.responseText);
						$("#CropIt").Jcrop({
							onChange: showCoords,
							onSelect: showCoords,
							setSelect: [0,0,200,200],
							allowResize : true,
							aspectRatio: 200 / 200,
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
						setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 1000);
					}
				}
			});
		});

		$("#SubmitAddNewPageCrop").click(function(){
			$("#AddNewPageCropDone").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "SAMEPAGE"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
							$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 2500);
						});
					}else if(xhr.responseText == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
							$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
							setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
						});
					}else{

					}
				}
			});
		})

		/*ADD NEW SUBPAGE TRANSACTIONS - STARTS*/
			$("#SubmitAddNewSubPage").click(function(){
				var Page = $("input[name=RefererPage]").val();
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
				var PageStatus = $("select[name=PageStatus]").val();
				PageStatus = $.trim(PageStatus);
				var degerler = "SubPageID=" + SubPageID + "&PageTitle=" + PageTitle + "&PageSummary=" + PageSummary + "&PageContent=" + PageContent + "&PageDescription=" + PageDescription + "&PageKeywords=" + PageKeywords + "&PageStatus=" + PageStatus;
				if(PageTitle == ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
						setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
					});
				}else{
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					$.ajax({
						type: "POST",
						url: "_includes/pagemanagement/ajaxes/addNewSubPage.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
								});
							}else if(sonuc == "SAMEPAGE"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 2500);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPageSaved"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){window.location=Page}, 1000);
								});
							}
						}
					});
				}
			});
		/*ADD NEW SUBPAGE TRANSACTIONS - ENDS*/

		/*CHANGE STATUS PAGE PHOTO TRANSACTIONS - STARTS*/
			$.changePageStatus = function(id){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
								$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
							});
						}else{location.reload();}
					}
				});
			}
		/*CHANGE STATUS PAGE PHOTO TRANSACTIONS- ENDS*/

		/*DELETE PAGE TRANSACTIONS - STARTS*/
			$.deletePage = function(msg,id){
				if(confirm(msg)){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeletePage"}).done(function(data){
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
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
				var PageStatus = $("select[name=PageStatus]").val();
				PageStatus = $.trim(PageStatus);
				var degerler = "PageID=" + PageID + "&PageTitle=" + PageTitle + "&PageSummary=" + PageSummary + "&PageContent=" + PageContent + "&PageDescription=" + PageDescription + "&PageKeywords=" + PageKeywords + "&PageStatus=" + PageStatus;
				// alert(degerler);
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoPageManagement").hide().removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				$.ajax({
					type: "POST",
					url: "_includes/pagemanagement/ajaxes/updatePage.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUpdateError"}).done(function(data){
								$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
								setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
							});
						}else if(sonuc == "SAMEPAGE"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSamePage"}).done(function(data){
								$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 2500);
							});
						}else{
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgPageUpdated"}).done(function(data){
								$("#InfoPageManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){window.location=RefererPage}, 1000);
							});
						}
					}
				});
			});
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
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
								});
							}else{
								$("#Sayfalar tr").not("#Sayfalar tr:eq(0)").html("");
								$(".main table#Sayfalar").append(sonuc);
								setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 1000);
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
						$("#InfoPageManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
									$("#InfoPageManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
									setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 3000);
								});
							}else{
								$("ul.AltSayfalariSirala").html("");
								$("ul.AltSayfalariSirala").append(sonuc);
								setTimeout(function(){$("#InfoPageManagement").hide('slow');}, 1000);
							}
						}
					});
				}
			});
		/*SHOW SUB PAGES2 FILTER TRANSACTIONS - ENDS*/
	/*PAGE MANAGEMENT TRANSACTIONS - ENDS*/

	/*E-MAIL SETTINGS TRANSACTIONS - STARTS*/
		var EPostaOK = "";
		var EPostaHata = "";
		$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgValidEMail"}).done(function(data){EPostaOK = data;});
		$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgInvalidEMail"}).done(function(data){EPostaHata = data;});
		$("#EMailAddress").focus(function(){
			$(this).css({
				'backgroundColor': '#fff',
				'border' : '1px solid #bb0000',
				'color' :	'#000',
				'font-weight' : 'normal'
			});
			$(this).keyup(function(){
			    	var eposta = $(this).val();
				eposta = $.trim(eposta);
				if(eposta != ""){
					var kontrol = new RegExp(/^[^0-9][a-zA-Z0-9-._]+([.][a-zA-Z0-9-._]+)*[@][a-zA-Z0-9-._]+([.][a-zA-Z0-9-._]+)*[.][a-zA-Z]{2,4}$/i);
				    	if(!kontrol.test(eposta)){
						$("#InfoInputEMailAddress").removeClass().addClass("red size10").html("<p>" + EPostaHata + "</p>");
						$("#EMailAddress").css({
							'backgroundColor': '#ff0000',
							'border' : '1px solid #000',
							'color' :	'#fff',
							'font-weight' : 'bold'
						});
				    	}else{
						$("#InfoInputEMailAddress").removeClass().addClass("green size10").html("<p>" + EPostaOK + "</p>");
						$("#EMailAddress").css({
							'backgroundColor': '#00aa00',
							'border' : '1px solid #000',
							'color' :	'#fff',
							'font-weight' : 'bold'
						});
				    	}
			    	}else{
				    	$("#EMailAddress").css({
						'backgroundColor': '#fff',
						'border' : '1px solid #bb0000',
						'color' :	'#000',
						'font-weight' : 'normal'
					});
					$("#InfoInputEMailAddress").html("");
			    	}
			});
		}).blur(function(){
				if ($(this).val() == "") {
					$("#EMailAddress").css({
						'backgroundColor': '#fff',
						'border' : '1px solid #bbb',
						'color' :	'#000',
						'font-weight' : 'normal'
					});
				}
		});
	/*E-MAIL SETTINGS TRANSACTIONS - ENDS*/

	/*USER MANAGEMENT TRANSACTIONS - STARTS*/
		/*USER NAME CONTROL TRANSACTIONS - STARTS*/
			$("#UserName").focus(function(){
				$(this).css({
					'backgroundColor': '#fff',
					'border' : '1px solid #bb0000',
					'color' :	'#000',
					'font-weight' : 'normal'
				});
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgWarningUserName"}).done(function(data){
						$("#InfoUserName").removeClass().addClass("red size10").html(data);
					});
			}).blur(function(){
				var UserName = $("input[name=UserName]").val();
				UserName = $.trim(UserName);
				if(UserName != ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgCheckUserName"}).done(function(data){
						$("#InfoUserName").removeClass().addClass("gray size10").html(data);
					});
					$.post("_includes/usermanagement/ajaxes/checkUserName.php",{UserName : UserName}).done(function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgAvailableUserName"}).done(function(data){
								$("#InfoUserName").removeClass().addClass("green size10").html(data);
							});
							$('#UserName').css({
								'backgroundColor': '#00aa00',
								'border' : '1px solid #000',
								'color' :	'#fff',
								'font-weight' : 'bold'
							});
						}else{
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSavedBefore"}).done(function(data){
								$("#InfoUserName").removeClass().addClass("red size10").html(data);
								$('#UserName').css({
									'backgroundColor': '#ff0000',
									'border' : '1px solid #000',
									'color' :	'#fff',
									'font-weight' : 'bold'
								});
							});
						}
					});
				}else{
					$(this).css({
						'backgroundColor': '#fff',
						'border' : '1px solid #bbb',
						'color' :	'#000',
						'font-weight' : 'normal'
					});
				}
			});
		/*USER NAME CONTROL TRANSACTIONS ENDS*/
		/*USER PASSWORD SECURITY CONTROL TRANSACTIONS - STARTS*/
			$("#UserPassword").pwstrength();
			$("#UserPassword").focus(function(){
				$("#pwindicator").show();
			}).blur(function(){
				$("#pwindicator").hide();
			});
		/*USER PASSWORD SECURITY CONTROL TRANSACTIONS - ENDS*/
		/*USER E-MAIL CONTROL TRANSACTIONS - STARTS*/
			$("#UserEMail").focus(function(){
				$(this).css({
					'backgroundColor': '#fff',
					'border' : '1px solid #bb0000',
					'color' :	'#000',
					'font-weight' : 'normal'
				});
				$("#InfoUserEMailAddress").html("");
			}).blur(function(){
				$(this).css({
					'backgroundColor': '#fff',
					'border' : '1px solid #bbb',
					'color' :	'#000',
					'font-weight' : 'normal'
				});
				$("#InfoUserEMailAddress").html("");
			}).keyup(function(){
				var eposta = $(this).val();
				eposta = $.trim(eposta);
				if(eposta != ""){
					var kontrol = new RegExp(/^[^0-9][a-zA-Z0-9-._]+([.][a-zA-Z0-9-._]+)*[@][a-zA-Z0-9-._]+([.][a-zA-Z0-9-._]+)*[.][a-zA-Z]{2,4}$/i);
				    	if(!kontrol.test(eposta)){
						$("#InfoUserEMailAddress").removeClass().addClass("red size10").html("<p>" + EPostaHata + "</p>");
						$("#UserEMail").css({
							'backgroundColor': '#ff0000',
							'border' : '1px solid #000',
							'color' :	'#fff',
							'font-weight' : 'bold'
						});
				    	}else{
						$("#InfoUserEMailAddress").removeClass().addClass("green size10").html("<p>" + EPostaOK + "</p>");
						$("#UserEMail").css({
							'backgroundColor': '#00aa00',
							'border' : '1px solid #000',
							'color' :	'#fff',
							'font-weight' : 'bold'
						});
				    	}
			    }else{
				    	$("#UserEMail").css({
						'backgroundColor': '#fff',
						'border' : '1px solid #bb0000',
						'color' :	'#000',
						'font-weight' : 'normal'
					});
					$("#InfoUserEMailAddress").html("");
			    }
			});
		/*USER E-MAIL CONTROL TRANSACTIONS - ENDS*/
		/*SAVE NEW USER TRANSACTIONS - STARTS*/
			$("#SubmitNewUser").click(function() {
				var UserFullName = $("input[name=UserFullName]").val();
				UserFullName = $.trim(UserFullName);
				var UserName = $("input[name=UserName]").val();
				UserName = $.trim(UserName);
				var UserPassword = $("input[name=UserPassword]").val();
				UserPassword = $.trim(UserPassword);
				UserPassword = $.md5(UserPassword);
				var UserEMail = $("input[name=UserEMail]").val();
				UserEMail = $.trim(UserEMail);
				var UserRoles = $("select[name=UserRoles]").val();
				UserRoles = $.trim(UserRoles);
				var Page = $("input[name=RefererPage]").val();
				if(UserName == "" || UserPassword == ""){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
						$("#InfoUserManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
						setTimeout(function(){$("#InfoUserManagement").hide('slow');}, 3000);
					});
				}else{
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoUserManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					$.post("_includes/usermanagement/ajaxes/checkUserName.php", {UserName:UserName}).done(function(data){
						if(data == "OKAY"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSavedBefore"}).done(function(data){
								$("#InfoUserManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							});
							setTimeout(function(){$("#InfoUserManagement").hide('slow');}, 4000);
						}else{
						  	$.post("_includes/usermanagement/ajaxes/checkUserEMail.php", {UserEMail:UserEMail}).done(function(data){
								if(data == "OKAY"){
									$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUsedEMail"}).done(function(data){
										$("#InfoUserManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
										setTimeout(function(){$("#InfoUserManagement").hide('slow');}, 4000);
									});
								}else{
									var degerler = "UserFullName=" + UserFullName + "&UserName=" + UserName + "&UserPassword=" + UserPassword + "&UserEMail=" + UserEMail + "&UserRole=" + UserRoles;
									$.ajax({
										type: "POST",
										url: "_includes/usermanagement/ajaxes/addNewUser.php",
										data : degerler,
										success: function(sonuc){
											if(sonuc == "HATA"){
												$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSaveError"}).done(function(data){
													$("#InfoUserManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
													setTimeout(function(){$("#InfoUserManagement").hide('slow');}, 3000);
												});
											}else{
												$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUserSaved"}).done(function(data){
													$("#InfoUserManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
													setTimeout(function(){window.location=Page}, 1000);
												});
											}
										}
									});
								}
							});
					  	}
					});
				}
			});
		/*SAVE NEW USER TRANSACTIONS - ENDS*/
		/*UPDATE USER TRANSACTIONS - STARTS*/
			$("#UpdateUser").click(function() {
				var UserID = $("input[name=UserID]").val();
				UserID = $.trim(UserID);
				var UserFullName = $("input[name=UserFullName]").val();
				UserFullName = $.trim(UserFullName);
				var UserPassword = $("input[name=UserPassword]").val();
				UserPassword = $.trim(UserPassword);
				if(UserPassword != ""){ UserPassword = $.md5(UserPassword); }
				var UserEMail = $("input[name=UserEMail]").val();
				UserEMail = $.trim(UserEMail);
				var UserRoles = $("select[name=UserRoles]").val();
				UserRoles = $.trim(UserRoles);
				var Page = $("input[name=RefererPage]").val();
				var degerler = "UserID=" + UserID + "&UserFullName=" + UserFullName + "&UserPassword=" + UserPassword + "&UserEMail=" + UserEMail + "&UserRole=" + UserRoles;
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoUserManagement").hide().removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				$.ajax({
					type: "POST",
					url: "_includes/usermanagement/ajaxes/updateUser.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUpdateError"}).done(function(data){
								$("#InfoUserManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
								setTimeout(function(){$("#InfoUserManagement").hide('slow');}, 3000);
							});
						}else if(sonuc == "KAYITLIEPOSTA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUsedEMail"}).done(function(data){
								$("#InfoUserManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								$("#UserEMail").val("").focus();
								// setTimeout(function(){$("#InfoUserManagement").hide('slow');}, 3000);
							});
						}else{
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUserUpdated"}).done(function(data){
								$("#InfoUserManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){window.location=Page}, 1000);
							});
						}
					}
				});
			});
		/*UPDATE USER TRANSACTIONS - ENDS*/
		/*DELETE USER TRANSACTIONS - STARTS*/
			$.deleteUser = function(msg,id){
				if(confirm(msg)){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoShowAllUsers").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					var userID = id;
					var degerler = "UserID=" + userID;
					$.ajax({
						type: "POST",
						url: "_includes/usermanagement/ajaxes/deleteUserName.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgMissingUser"}).done(function(data){
									$("#InfoShowAllUsers").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoShowAllUsers").hide('slow');}, 3000);
								});
							}else{
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeleteUser"}).done(function(data){
									$("#InfoShowAllUsers").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoShowAllUsers").hide('slow');}, 3000);
									location.reload();
								});
							}
						}
					});
				}else{

				}
			}
		/*DELETE USER TRANSACTIONS - ENDS*/
	/*USER MANAGEMENT TRANSACTIONS - ENDS*/

	/*SLIDE MANAGEMENT TRANSACTIONS - STARTS*/
		/*ADD SLIDE PHOTO(S) TRANSACTIONS - STARTS*/
			$("#SubmitNewSlides").click(function(){
				$("#SlidePhotoUpload").ajaxForm({
					beforeSend: function(){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
							$("#InfoSlideManagement").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
						});
					},
					uploadProgress:function(olay, yuklenen, toplam, yuzde){},
					complete: function(xhr){
						if(xhr.responseText == "OK"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSlideUploaded"}).done(function(data){
								$("#InfoSlideManagement").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data +"</p>").show('slow');
								setTimeout(function(){$("#InfoSlideManagement").hide('slow');}, 3000);
							});
						}else{
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUploadError"}).done(function(data){
								$("#InfoSlideManagement").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data +"</p>").show('slow');
								setTimeout(function(){$("#InfoSlideManagement").hide('slow');}, 3000);
							});
						}
					}
				});
			});
		/*ADD SLIDE PHOTO(S) TRANSACTIONS - ENDS*/

		/*SORT SLIDE PHOTOS TRANSACTIONS- STARTS*/
			$(".SortSlidePhotos").sortable({
				opacity: 0.6,
				placeholder: "ui-state-highlight",
				handle : '.handle',
				update : function () {
					var order = $('.SortSlidePhotos').sortable('serialize');
					$.get('_includes/slidemanagement/ajaxes/sortSlides.php?'+order, function(data) {
						if(data == "OK"){}
					});
				}
			});
			$(".SortSlidePhotos").disableSelection();
		/*SORT SLIDE PHOTOS TRANSACTIONS - ENDS*/

		/*DELETE SLIDE PHOTO TRANSACTIONS - STARTS*/
			$.deleteSlide = function(msg,id){
				if(confirm(msg)){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#InfoShowSlides").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
					var slideID = id;
					var degerler = "SlideID=" + slideID;
					$.ajax({
						type: "POST",
						url: "_includes/slidemanagement/ajaxes/deleteSlide.php",
						data : degerler,
						success: function(sonuc){
							if(sonuc == "HATA"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeleteError"}).done(function(data){
									$("#InfoShowSlides").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#InfoShowSlides").hide('slow');}, 3000);
								});
							}else{location.reload();}
						}
					});
				}else{}
			}
		/*DELETE SLIDE PHOTO TRANSACTIONS- ENDS*/

		/*CHANGE STATUS SLIDE PHOTO TRANSACTIONS - STARTS*/
			$.changeSlideStatus = function(id){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoShowSlides").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var slideID = id;
				var degerler = "SlideID=" + slideID;
				$.ajax({
					type: "POST",
					url: "_includes/slidemanagement/ajaxes/changeSlideStatus.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
								$("#InfoShowSlides").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoShowSlides").hide('slow');}, 3000);
							});
						}else{location.reload();}
					}
				});
			}
		/*CHANGE STATUS SLIDE PHOTO TRANSACTIONS- ENDS*/

		/*UPDATE SLIDE INFO TRANSACTIONS - STARTS*/
			$("#SubmitUpdateSlide").click(function(){
				var SlideID = $("input[name=SlideID]").val();
				SlideID = $.trim(SlideID);
				var SlideTitle = $("input[name=SlideTitle]").val();
				SlideTitle = $.trim(SlideTitle);
				var SlideDescription = $("input[name=SlideDescription]").val();
				SlideDescription = $.trim(SlideDescription);
				var Page = $("input[name=RefererPage]").val();
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoSlideDetails").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var degerler = "SlideID=" + SlideID + "&SlideTitle=" + SlideTitle + "&SlideDescription=" + SlideDescription;
				$.ajax({
					type: "POST",
					url: "_includes/slidemanagement/ajaxes/updateSlideDetails.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUpdateError"}).done(function(data){
								$("#InfoSlideDetails").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoSlideDetails").hide('slow');}, 3000);
							});
						}else{window.location = Page;}
					}
				});
			});
		/*UPDATE SLIDE INFO TRANSACTIONS - ENDS*/
	/*SLIDE MANAGEMENT TRANSACTIONS - ENDS*/

	/*LANGUAGE MANAGEMENT TRANSACTIONS - STARTS*/
		/*CHANGE STATUS LANGUAGE TRANSACTIONS - STARTS*/
			$.changeLanguageStatus = function(id){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#InfoShowLanguages").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var langID = id;
				var degerler = "LangID=" + langID;
				$.ajax({
					type: "POST",
					url: "_includes/languagemanagement/ajaxes/changeLanguageStatus.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
								$("#InfoShowLanguages").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#InfoShowLanguages").hide('slow');}, 3000);
							});
						}else{location.reload();}
					}
				});
			}
		/*CHANGE STATUS LANGUAGE TRANSACTIONS - ENDS*/
	/*LANGUAGE MANAGEMENT TRANSACTIONS - ENDS*/

	/*REMAINING CHARACTER TRANSACTIONS - STARTS*/
		$("#TitleKalanKarakter").html(70 - $("#SiteTitle").val().length);
		$("#SiteTitle").keyup(function(){
			var limit = 70;
			var yazi = $("#SiteTitle").val();
			var uzunluk = yazi.length;
			var deger = limit - uzunluk;
			if (deger >= 0) {
				$("#TitleKalanKarakter").html(deger);
			}else{
				var yenideger = yazi.substring(0,limit);
				yazi = yenideger;
				$("#SiteTitle").val(yazi);
			}
		});

		$("#DescKalanKarakter").html(160 - $("#SiteDescription").val().length);
		$("#SiteDescription").keyup(function(){
			var limit = 160;
			var yazi = $("#SiteDescription").val();
			var uzunluk = yazi.length;
			var deger = limit - uzunluk;
			if (deger >= 0) {
				$("#DescKalanKarakter").html(deger);
			}else{
				var yenideger = yazi.substring(0,limit);
				yazi = yenideger;
				$("#SiteDescription").val(yazi);
			}
		});

		$("#KeyWKalanKarakter").html(260 - $("#SiteKeywords").val().length);
		$("#SiteKeywords").keyup(function(){
			var limit = 260;
			var yazi = $("#SiteKeywords").val();
			var uzunluk = yazi.length;
			var deger = limit - uzunluk;
			if (deger >= 0) {
				$("#KeyWKalanKarakter").html(deger);
			}else{
				var yenideger = yazi.substring(0,limit);
				yazi = yenideger;
				$("#SiteKeywords").val(yazi);
			}
		});
	/*REMAINING CHARACTER TRANSACTIONS - ENDS*/
});