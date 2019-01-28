var DishDetailsViewCtrl = function(view,model){
	$("#backToSearch").click(function(){
		$("#SidebarView").show();
	    $("#DishSearchView").show();
	    $("#DishDetailsView").hide();
	    //console.log("啊啊啊啊DishDetailsView");
	})

	view.container.querySelector("#addToMenu").onclick = function(){
		model.addDishToMenu(model.currentId);
		//console.log(model.menu);
	}
}