var RecipesVC = function(view, model, navigationDelegate){
	
	view.container.querySelector("#backButtonRecipesSCreen").onclick = function(){
		// $("#SidebarView").hide();
		// $("#DishSearchView").hide();
		// $("#DishDetailsView").hide();
		// $("#ConfirmPageView").show();
		// $("#RecipesView").hide();
		navigationDelegate.navigateTo("ConfirmPageView");
	}

	// view.container.querySelector("#printRecipe").onclick = function(){
	// 	$("#SidebarView").hide();
	// 	$("#DishSearchView").hide();
	// 	$("#DishDetailsView").hide();
	// 	$("#RecipesView").show();
	// 	$("#ScreenFourView").hide();
		
	// }

	
}