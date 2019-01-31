window.onload= function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	
	var sidebarView = new SidebarView(document.querySelector("#SidebarView"), model);
	var sidebarCtrl = new SidebarCtrl(sidebarView,model);

	var screenFourView = new View_Four(document.querySelector("#ScreenFourView"), model);
	var screenFourViewCont = new Screen4Ctrl(screenFourView, model);

	var dishSearchView = new DishSearchView(document.querySelector("#DishSearchView"), model);
	var dishSearchViewCtrl = new DishSearchViewCtrl(dishSearchView,model);

	var dishDetailsView = new DishDetailsView(document.querySelector("#DishDetailsView"),model);
	var dishDetailsViewCtrl = new DishDetailsViewCtrl(dishDetailsView,model);

	var indexPageCtrl = new IndexPageCtrl(dishSearchView,model);


	$("#SidebarView").hide();
	$("#DishSearchView").hide();
	$("#DishDetailsView").hide();
	$("#ScreenFourView").hide();


	var toDishDetailsView = function(){
    	$("#SidebarView").hide();
    	$("#DishSearchView").hide();
		$("#DishDetailsView").show();
	}


};