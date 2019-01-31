var ConfirmPageCtrl = function(view, model){
	

	view.container.querySelector("#backButtonScreenFour").onclick = function(){
		$("#SidebarView").show();
		$("#DishSearchView").show();
		$("#DishDetailsView").hide();
		$("#ScreenFourView").hide();
		
	}

	view.container.querySelector("#printRecipe").onclick = function(){
		$("#SidebarView").hide();
		$("#DishSearchView").hide();
		$("#DishDetailsView").hide();
		$("#RecipesView").show();
		$("#ConfirmPageView").hide();
		
	}

	
}