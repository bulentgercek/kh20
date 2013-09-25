$(function(){
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
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
					setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
				});
			}else{
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgProcessing"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
				});
				$.post("_includes/usermanagement/ajaxes/checkUserName.php", {UserName:UserName}).done(function(data){
					if(data == "OKAY"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgSavedBefore"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
						});
						setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 4000);
					}else{
					  	$.post("_includes/usermanagement/ajaxes/checkUserEMail.php", {UserEMail:UserEMail}).done(function(data){
							if(data == "OKAY"){
								$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUsedEMail"}).done(function(data){
									$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
									setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 4000);
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
												$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
												setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
											});
										}else{
											$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUserSaved"}).done(function(data){
												$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
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
				$("#SiteInfoMessage").hide().removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
			});
			$.ajax({
				type: "POST",
				url: "_includes/usermanagement/ajaxes/updateUser.php",
				data : degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUpdateError"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show();
							setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else if(sonuc == "KAYITLIEPOSTA"){
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUsedEMail"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucError").html("<h3></h3><p>" + data + "</p>").show('slow');
							$("#UserEMail").val("").focus();
							// setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
						});
					}else{
						$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgUserUpdated"}).done(function(data){
							$("#SiteInfoMessage").removeClass().addClass("ucPopup ucSuccesful").html("<h3></h3><p>" + data + "</p>").show('slow');
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
});