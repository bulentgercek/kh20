$(function(){
// CKEditor Initialize
	$("textarea.Editor").ckeditor();

/*MENU TOOGLE*/
	$.urlVeri = function(deger){
		var veribul = new RegExp('[\\?&]' + deger + '=([^&#]*)').exec(window.location.href);
		return veribul[1] || 0;
	}
	var QueryString = $.urlVeri("zone");
	$(".Menu h2").not(this).next("ul").hide();
	$(".Menu h2").click( function() { $(this).next("ul").slideToggle(); });
	$(".Menu h2#language").not(this).next("ul").show();
	$(".Menu h2#"+QueryString).not(this).next("ul").show("normal");
/*MENU TOOGLE*/
});