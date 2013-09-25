$(function(){
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
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
			});
		}else{
			$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
				$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			var degerler = "SiteTitle=" + SiteTitle + "&SiteURL=" + SiteURL + "&SiteDescription=" + SiteDescription + "&SiteKeywords=" + SiteKeywords + "&SiteStatus=" + SiteStatus;
			$.ajax({
				type: "POST",
				url: "_includes/sitesettings/ajaxes/updateSiteSettings.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessSuccesfull"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 2000);
							location.reload();
						});
					}
				}
			});
		}
	});
/*SITE SETTINGS TRANSACTIONS - ENDS*/
});