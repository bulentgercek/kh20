$(function(){
/*LANGUAGE MANAGEMENT TRANSACTIONS - STARTS*/
	/*CHANGE STATUS LANGUAGE TRANSACTIONS - STARTS*/
		$.changeLanguageStatus = function(id){
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{location.reload();}
				}
			});
		}
	/*CHANGE STATUS LANGUAGE TRANSACTIONS - ENDS*/
/*LANGUAGE MANAGEMENT TRANSACTIONS - ENDS*/
});