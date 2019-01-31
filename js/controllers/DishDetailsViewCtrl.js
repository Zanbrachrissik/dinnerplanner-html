var DishDetailsViewCtrl = function(view,model, navigationDelegate){
	$("#backToSearch").click(function(){
		// $("#SidebarView").show();
	 //    $("#DishSearchView").show();
	 //    $("#DishDetailsView").hide();
	 navigationDelegate.navigateTo("DishSearchView");
	    //console.log("啊啊啊啊DishDetailsView");
	})

	view.container.querySelector("#addToMenu").onclick = function(){
		model.addDishToMenu(model.currentId);
		//console.log(model.menu);
	}
}