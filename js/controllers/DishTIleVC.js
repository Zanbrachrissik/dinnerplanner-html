var DishTileVC = function(view,model, id, navigationDelegate){
	this.id = id;
	

	view.onclick = function(){
		model.setCurrentId(this.id);
		navigationDelegate.navigateTo("DishDetailsView");
	}

	
}