$(function(){
/*REMAINING CHARACTER TRANSACTIONS - STARTS*/
	// Title
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

	// Description
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

	// Keywords
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