var SidebarCtrl = function(view, model){
	
	 $("#foodType").change(function() {
		console.log("dropdown.");
		console.log(model.getSelectedDish($(this).val()));
	})

	$("#guestNumber").change(function () {
		var GuestNumber=document.getElementById("guestNumber").value;
		console.log(GuestNumber);
		model.setNumberOfGuests(GuestNumber);
	})
	
}