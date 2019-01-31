var Screen4Ctrl = function(view, model){
	

	view.container.querySelector("#backButtonScreenFour").onclick = function(){
		$("#SidebarView").show();
		$("#DishSearchView").hide();
		$("#DishDetailsView").show();
		$("#ScreenFourView").hide();
		
	}

	view.container.querySelector("#printRecipe").onclick = function(){
		$("#SidebarView").hide();
		$("#DishSearchView").hide();
		$("#DishDetailsView").hide();
		$("#RecipesView").show();
		$("#ScreenFourView").hide();
		
	}

	
}