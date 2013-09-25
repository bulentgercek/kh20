$(function(){
/*SOCIAL NETWORK TRANSACTIONS - STARTS*/
	$("#SocialNetworkSubmit").click(function(){
		$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
			$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
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
	});
/*SOCIAL NETWORK TRANSACTIONS - ENDS*/
});