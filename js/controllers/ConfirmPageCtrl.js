var ConfirmPageCtrl = function(view, model, navigationDelegate){
	

	view.backToSearchPage.onclick = function(){
		navigationDelegate.navigateTo("DishSearchView");
	}

	view.printRecipe.onclick = function(){
		navigationDelegate.navigateTo("RecipesView");
		
	}

	
}