var IndexPageCtrl = function(view, model, navigationDelegate){
	
	 $("#createDinner").click(function() {

    	// $("#SidebarView").show();
    	// $("#DishSearchView").show();
    	// $("#indexPage").hide(); 
    	navigationDelegate.navigateTo("DishSearchView");
    	view.search();

	})

}