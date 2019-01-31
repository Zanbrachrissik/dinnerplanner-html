var DishDetailsViewCtrl = function(view,model, navigationDelegate){
	view.container.querySelector("#backToSearch").onclick = function(){
		navigationDelegate.navigateTo("DishSearchView");
	}

	view.container.querySelector("#addToMenu").onclick = function(){
		model.addDishToMenu(model.currentId);
		//console.log(model.menu);
	}
}