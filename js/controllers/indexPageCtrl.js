var IndexPageCtrl = function(view, model){
	
	 $("#createDinner").click(function() {
		console.log("navigate to sidebar view.");

    	$("#ScreenTwoView").show();
    	$("#DishSearchView").show();
    	$("#indexPage").hide(); 
    	view.search();

	})

}