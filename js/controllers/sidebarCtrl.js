var SidebarCtrl = function(view, model, navigationDelegate){

	view.container.querySelector("#guestNumber").onchange = function () {
		var GuestNumber=document.getElementById("guestNumber").value;
		//console.log(GuestNumber);
		model.setNumberOfGuests(GuestNumber);
	}

	view.container.querySelector("#ConfirmDinner").onclick = function(){
		// $("#SidebarView").hide();
		// $("#DishSearchView").hide();
		// $("#DishDetailsView").hide();
		// $("#ConfirmPageView").show();
		navigationDelegate.navigateTo("ConfirmPageView");
	}

	
}