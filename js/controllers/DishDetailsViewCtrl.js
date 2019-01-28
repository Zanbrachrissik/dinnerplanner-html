var DishDetailsViewCtrl = function(view,model){
	$("#backToSearch").click(function(){
		$("#ScreenTwoView").show();
	    $("#DishSearchView").show();
	    $("#DishDetailsView").hide();
	    console.log("啊啊啊啊DishDetailsView");
	})

	/*
	$('#showDish').find('div').each(function(){
	    var innerDivId = $(this).attr('id');
	    $(this).click(function(){
	    	view.getDish(innerDivId);
	    })
	    console.log("innerDivId");
	});
	*/


}