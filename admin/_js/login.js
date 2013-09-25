$(function(){
	$('#Girisbuton').click(function(){
		var username = $("input[name=username]").val();
		username = $.trim(username);
		var password = $("input[name=password]").val();
		password = $.trim(password);
		password = $.md5(password);

		if(username == "" || password == ""){
			$("#GirisMesaj").addClass("warning-box").html("Kullanıcı adı ve şifre boş bırakılamaz!").show();
			setTimeout(function(){ $("#GirisMesaj").hide(); }, 4000);
	    }else{
			$("#GirisMesaj").removeClass().addClass("information-box").html("Giriş için kullanıcı adı ve şifreniz kontrol ediliyor. Lütfen Bekleyiniz..").show();
			var degerler = "username=" + username + "&password=" + password;
			$.ajax({
				type: "POST",
				url: "_includes/login.php",
				data: degerler,
				success: function(sonuc){
					if(sonuc == "HATA"){
						$("#GirisMesaj").removeClass().addClass("error-box").html("Lütfen kullanıcı adı ve şifrenizi kontrol ediniz.").show();
						setTimeout(function(){ $("#GirisMesaj").hide(); }, 3000);
					}else{
						$("#GirisMesaj").hide();
						$("#GirisMesaj").removeClass().addClass("confirmation-box").html("Girişiniz onaylandı. Yönetim Paneli'ne yönlendiriliyorsunuz.").show();
						setTimeout(function(){window.location="index.php"}, 1500);
					}
				}
			});
		}
	});

	$('#SifreTalebi').click(function(){
		$('#Sifre').show();
	});

	$('#Sifrebuton').click(function(){
		var useremail = $("input[name=useremail]").val();
		useremail = $.trim(useremail);
		if(useremail == ""){
			$("#GirisMesaj").addClass("warning-box").html("E-Posta adresi boş bırakılamaz!").show();
			setTimeout(function(){ $("#GirisMesaj").hide(); }, 4000);
		}else{
			var kontrol = new RegExp(/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/i);
			if(!kontrol.test(useremail)){
				$("#GirisMesaj").removeClass().addClass("warning-box").html("Lütfen geçerli bir eposta adresi giriniz.!!").show('slow');
				setTimeout(function(){ $("#GirisMesaj").hide('slow'); }, 4000);
			}else{
				$("#GirisMesaj").removeClass().addClass("warning-box").html("E-Posta adresiniz kontrol ediliyor.").show('slow');
				setTimeout(function(){ $("#GirisMesaj").hide('slow'); }, 4000);
				var degerler = "eposta=" + useremail;
				$.ajax({
					type: "POST",
					url: "_includes/sendpassword.php",
					data: degerler,
					success: function(sonuc){
						if(sonuc == "HATA1"){
							$("#GirisMesaj").removeClass().addClass("error-box").html("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.").show();
							setTimeout(function(){ $("#GirisMesaj").hide(); }, 3000);
						}else if(sonuc == "HATA2"){
							$("#GirisMesaj").removeClass().addClass("warning-box").html("Girmiş olduğunuz e-posta adresi sistemimizde kayıtlı değil.").show();
							setTimeout(function(){ $("#GirisMesaj").hide(); }, 3000);
						}else{
							$("#GirisMesaj").hide();
							$("#GirisMesaj").removeClass().addClass("confirmation-box").html("Yeni şifreniz oluşturuldu ve e-posta adresinize gönderildi.").show();
							setTimeout(function(){window.location="index.php"}, 1500);
						}
					}
				});
			}
		}
	});
});