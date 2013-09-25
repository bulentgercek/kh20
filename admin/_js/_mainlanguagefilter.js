$(function(){
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
});