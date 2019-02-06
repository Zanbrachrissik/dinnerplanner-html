var RecipesVC = function(view, model, navigationDelegate){
	
	view.container.querySelector("#backButtonRecipesSCreen").onclick = function(){
		navigationDelegate.navigateTo("ConfirmPageView");
	}

}