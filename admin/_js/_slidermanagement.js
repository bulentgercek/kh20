$(function(){
/*SLIDE MANAGEMENT TRANSACTIONS - STARTS*/
	/*ADD SLIDE PHOTO(S) TRANSACTIONS - STARTS*/
		$("#SubmitNewSlides").click(function(){
			$("#SlidePhotoUpload").ajaxForm({
				beforeSend: function(){
					$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
						$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					});
				},
				uploadProgress:function(olay, yuklenen, toplam, yuzde){},
				complete: function(xhr){
					if(xhr.responseText == "OK"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSlideUploaded"}).done(function(data){
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
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
						}else{location.reload();}
					}
				});
			}else{}
		}
	/*DELETE SLIDE PHOTO TRANSACTIONS- ENDS*/

	/*DELETE ALL SLIDES PHOTO TRANSACTIONS - STARTS*/
		$.deleteAllSlides = function(msg){
			if(confirm(msg)){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				var degerler = "SlideID=0";
				$.ajax({
					type: "POST",
					url: "_includes/slidemanagement/ajaxes/deleteAllSlides.php",
					data : degerler,
					success: function(sonuc){
						if(sonuc == "HATA"){
							$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgDeleteError"}).done(function(data){
								$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
								setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
							});
						}else{location.reload();}
					}
				});
			}else{}
		}
	/*DELETE ALL SLIDES PHOTO TRANSACTIONS- ENDS*/

	/*CHANGE STATUS SLIDE PHOTO TRANSACTIONS - STARTS*/
		$.changeSlideStatus = function(id){
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
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
});