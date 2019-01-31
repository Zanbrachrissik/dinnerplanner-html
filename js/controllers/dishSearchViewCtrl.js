var DishSearchViewCtrl = function(view,model){
	view.searchButton.onclick = function(){
		view.search();
	}

	/*
	$('#showDish').find('div').each(function(){
	    var innerDivId = $(this).attr('id');
	    $(this).click(function(){
	    	console.log("加入click功能");
	    	$("#DishSearchView").hide();
			$("#DishDetailsView").show();
	    	model.setCurrentId(innerDivId);
	    	console.log(innerDivId);
	    })
	})
	*/
}