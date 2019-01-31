var DishTileVC = function(view,model, id, navigationDelegate){
	this.id = id;
	

	view.onclick = function(){
		// $("#SidebarView").hide();
		// $("#DishSearchView").hide();
		// $("#DishDetailsView").hide();
		// $("#ConfirmPageView").show();
		// $("#RecipesView").hide();
		model.setCurrentId(this.id);
		navigationDelegate.navigateTo("DishDetailsView");
	}

	// view.container.querySelector("#dishTileDiv").onclick = function(){
	// 	// $("#SidebarView").hide();
	// 	// $("#DishSearchView").hide();
	// 	// $("#DishDetailsView").hide();
	// 	// $("#ConfirmPageView").show();
	// 	// $("#RecipesView").hide();
	// 	model.setCurrentId(this.id);
	// 	navigationDelegate.navigateTo("DishDetailsView");
	// }

	// view.container.querySelector("#printRecipe").onclick = function(){
	// 	$("#SidebarView").hide();
	// 	$("#DishSearchView").hide();
	// 	$("#DishDetailsView").hide();
	// 	$("#RecipesView").show();
	// 	$("#ScreenFourView").hide();
		
	// }

	
}