var DishDetailsViewCtrl = function(view,model, navigationDelegate){
	view.backToSearch.onclick = function(){
		navigationDelegate.navigateTo("DishSearchView");
	}

	view.backToMenu.onclick = function(){
		model.addDishToMenu(model.currentId);
		//console.log(model.menu);
	}
}