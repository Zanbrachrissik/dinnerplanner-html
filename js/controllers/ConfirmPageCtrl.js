var ConfirmPageCtrl = function(view, model, navigationDelegate){
	

	view.container.querySelector("#backButtonScreenFour").onclick = function(){
		// $("#SidebarView").show();
		// $("#DishSearchView").show();
		// $("#DishDetailsView").hide();
		// $("#ConfirmPageView").hide();
		navigationDelegate.navigateTo("DishSearchView");
	}

	view.container.querySelector("#printRecipe").onclick = function(){
		// $("#SidebarView").hide();
		// $("#DishSearchView").hide();
		// $("#DishDetailsView").hide();
		// $("#RecipesView").show();
		// $("#ConfirmPageView").hide();
		navigationDelegate.navigateTo("RecipesView");
		
	}

	
}