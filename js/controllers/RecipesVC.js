var RecipesVC = function(view, model, navigationDelegate){
	
	view.backButton.onclick = function(){
		navigationDelegate.navigateTo("ConfirmPageView");
	}

}