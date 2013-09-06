$(function(){
	$("textarea.Editor").ckeditor();

	// var $durum = 0;
	// $("form *").keyup(function(){
	// 	$durum = 1;
	// });

	// setInterval(function(){
	// 	if($durum == 1){
	// 		$(window).bind("beforeunload", function(){
	// 			return 'Henüz formunuzu tamamlamadınız. Sayfadan ayrılırsanız verileriniz kaybolacak!!'
	// 		});
	// 	}
	// }, 100);

	$("#Crop").Jcrop({
		onChange: showCoords,
		onSelect: showCoords,
		setSelect: [0,0,200,92],
		allowResize : true,
		aspectRatio: 200 / 92,
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
	$("#Crop2").Jcrop({
		onChange: showCoords,
		onSelect: showCoords,
		setSelect: [0,0,220,268],
		allowResize : true,
		aspectRatio: 220 / 268,
		addClass: 'jcrop-dark'
	});

	// $.urlVeri = function(deger){
	// 	var veribul = new RegExp('[\\?&]' + deger + '=([^&#]*)').exec(window.location.href);
	// 	return veribul[1] || 0;
	// }

	// $(".Menu h2").not(this).next("ul").hide("normal");

	// $(".Menu h2").not(this).next("ul").show("normal");
	// $(".Menu h2").click( function() { $(this).next("ul").slideToggle(); });

	// var QueryString = $.urlVeri("menu");
	// $(".Menu h2").eq(QueryString).not(this).next("ul").show("normal");


	$("#test-list").sortable({
		opacity: 0.6,
		placeholder: "ui-state-highlight",
		handle : '.handle',
		update : function () {
			var order = $('#test-list').sortable('serialize');
			$(".infom").load("_includes/islem.php?"+order).show();
			setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});

	$("#ActivityPhotos").sortable({
		opacity: 0.6,
		placeholder: "ui-state-highlight",
		handle : '.handle',
		update : function () {
			var order = $('#ActivityPhotos').sortable('serialize');
			$(".infom").load("_includes/sortactivityphotos.php?"+order).show();
			setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$("#ActivityPhotos").disableSelection();

	$(".AktiviteSirala").sortable({
		opacity: 0.6,
		placeholder: "ui-state-highlight",
		handle : '.handle',
		update : function () {
			var order = $('.AktiviteSirala').sortable('serialize');
			$(".infom").load("_includes/sortactivities.php?"+order).show();
			setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$(".AktiviteSirala").disableSelection();

	$(".HizmetFotolariSirala").sortable({
	opacity: 0.6,
	placeholder: "ui-state-highlight",
	handle : '.handle',
	update : function () {
		var order = $('.HizmetFotolariSirala').sortable('serialize');
		$(".infom").load("_includes/sortservicephotos.php?"+order).show();
		setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$(".HizmetFotolariSirala").disableSelection();

	$(".SliderFotografSirala").sortable({
	opacity: 0.6,
	placeholder: "ui-state-highlight",
	handle : '.handle',
	update : function () {
		var order = $('.SliderFotografSirala').sortable('serialize');
		$(".infom").load("_includes/sortsliderphotos-ajax.php?"+order).show();
		setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$(".SliderFotografSirala").disableSelection();

	$(".GaleriFotolariSirala").sortable({
	opacity: 0.6,
	placeholder: "ui-state-highlight",
	handle : '.handle',
	update : function () {
		var order = $('.GaleriFotolariSirala').sortable('serialize');
		$(".infom").load("_includes/sortgalleryphotos.php?"+order).show();
		setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$(".GaleriFotolariSirala").disableSelection();

	$(".AnaHizmetleriSirala").sortable({
	opacity: 0.6,
	placeholder: "ui-state-highlight",
	handle : '.handle',
	update : function () {
		var order = $('.AnaHizmetleriSirala').sortable('serialize');
		$(".infom").load("_includes/sortservicepages-ajax.php?"+order).show();
		setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$(".AnaHizmetleriSirala").disableSelection();

	$(".AnaSayfaHizmetleriSirala").sortable({
	opacity: 0.6,
	placeholder: "ui-state-highlight",
	handle : '.handle',
	update : function () {
		var order = $('.AnaSayfaHizmetleriSirala').sortable('serialize');
		$(".infom").load("_includes/sortservicepages-ajax2.php?"+order).show();
		setTimeout(function(){ $(".infom").hide('fast'); }, 2000);
		}
	});
	$(".AnaSayfaHizmetleriSirala").disableSelection();

});