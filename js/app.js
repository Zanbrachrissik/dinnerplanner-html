window.onload= function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	
	var sidebarView = new SidebarView(document.querySelector("#SidebarView"), model);
	var sidebarCtrl = new SidebarCtrl(sidebarView,model,this);

	var screenFourView = new ConfirmPageView(document.querySelector("#ConfirmPageView"), model);
	var screenFourViewCont = new ConfirmPageCtrl(screenFourView, model, this);

	var dishSearchView = new DishSearchView(document.querySelector("#DishSearchView"), model,this);
	var dishSearchViewCtrl = new DishSearchViewCtrl(dishSearchView,model);

	var dishDetailsView = new DishDetailsView(document.querySelector("#DishDetailsView"),model);
	var dishDetailsViewCtrl = new DishDetailsViewCtrl(dishDetailsView,model,this);

	var indexPageCtrl = new IndexPageCtrl(dishSearchView,model,this);

	var recipesView = new RecipesView(document.querySelector("#RecipesView"), model)
	var recipesVC = new RecipesVC(recipesView,model,this);


	$("#SidebarView").hide();
	$("#DishSearchView").hide();
	$("#DishDetailsView").hide();
	$("#ConfirmPageView").hide();
	$("#RecipesView").hide();


	var toDishDetailsView = function(){
    	$("#SidebarView").hide();
    	$("#DishSearchView").hide();
		$("#DishDetailsView").show();
	}

	this.navigateTo = function(targetScreen){
		$("#SidebarView").hide();
		$("#DishSearchView").hide();
		$("#DishDetailsView").hide();
		$("#ConfirmPageView").hide();
		$("#RecipesView").hide();
		$("#indexPage").hide();

		switch(targetScreen){
			case "DishSearchView":
				$("#SidebarView").show();
				$("#DishSearchView").show();
				break;

			case "DishDetailsView":
				$("#SidebarView").show();
				$("#DishDetailsView").show();
				break;

			case "ConfirmPageView":
				$("#ConfirmPageView").show();
			break;

			case "RecipesView":
				$("#RecipesView").show();
			break;
		}
	}


};