var SidebarCtrl = function(view, model, navigationDelegate){

	view.guestNumberView.onchange = function () {
		var GuestNumber=document.getElementById("guestNumber").value;
		//console.log(GuestNumber);
		model.setNumberOfGuests(GuestNumber);
	}

	view.confirmDinnerButton.onclick = function(){
		// $("#SidebarView").hide();
		// $("#DishSearchView").hide();
		// $("#DishDetailsView").hide();
		// $("#ConfirmPageView").show();
		navigationDelegate.navigateTo("ConfirmPageView");
	}

	
}