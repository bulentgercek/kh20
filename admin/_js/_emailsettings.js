$(function(){
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
});