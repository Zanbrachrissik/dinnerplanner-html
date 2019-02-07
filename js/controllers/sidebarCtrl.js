var SidebarCtrl = function(view, model, navigationDelegate){

	view.guestNumberView.onchange = function () {
		var GuestNumber=document.getElementById("guestNumber").value;
		model.setNumberOfGuests(GuestNumber);
	}

	view.confirmDinnerButton.onclick = function(){
		navigationDelegate.navigateTo("ConfirmPageView");
	}

	
}