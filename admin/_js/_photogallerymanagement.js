$(function(){
/*PHOTO GALLERY MANAGEMENT TRANSACTIONS - STARTS*/
	/*ADD NEW CATEGORY TRANSACTIONS - STARTS*/
		$("#SubmitAddNewCategory").click(function(){
			var CategoryName = $("input[name=PhotoGalleryNewCategoryName]").val();
			CategoryName = $.trim(CategoryName);
			if(CategoryName == ""){
				$.post("_includes/systemmessages/getSystemMessages.php", {MessageCode:"msgRequiredZone"}).done(function(data){
					$("#SiteInfoMessage").removeClass().addClass("ucPopup ucWarning").html("<h3></h3><p>" + data + "</p>").show('slow');
					setTimeout(function(){$("#SiteInfoMessage").hide('slow');}, 3000);
				});
			}else{

			}
		});
	/*ADD NEW CATEGORY TRANSACTIONS - ENDS*/
/*PHOTO GALLERY MANAGEMENT TRANSACTIONS - ENDS*/
});