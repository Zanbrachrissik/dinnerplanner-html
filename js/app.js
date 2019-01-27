window.onload= function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	
	var screenTwoView = new View_Two(document.querySelector("#ScreenTwoView"), model);
	var sidebarCtrl = new SidebarCtrl(screenTwoView,model);

	var screenFourView = new View_Four(document.querySelector("#ScreenFourView"), model);

	var dishSearchView = new DishSearchView(document.querySelector("#DishSearchView"), model);
	var dishSearchViewCtrl = new DishSearchViewCtrl(dishSearchView,model);

	var indexPageCtrl = new IndexPageCtrl(dishSearchView,model);



    $("#ScreenTwoView").hide();
    $("#ScreenFourView").hide();
    $("#DishSearchView").hide();


	var showScreenTwo = function(){
    $("#ScreenTwoView").show();

	}


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};