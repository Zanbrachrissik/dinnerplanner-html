var IndexPageCtrl = function(view, model){
	
	 $("#createDinner").click(function() {

    	$("#SidebarView").show();
    	$("#DishSearchView").show();
    	$("#indexPage").hide(); 
    	view.search();

	})

}