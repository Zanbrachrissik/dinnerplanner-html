class SidebarView {
    constructor (container, model) {
	this.container=container;
	this.model=model;
	this.guestNumberView = container.querySelector("#guestNumber");
	this.confirmDinnerButton = container.querySelector("#ConfirmDinner");

	 this.update = function(){
		this.totalPrice = container.querySelector("#totalPrice");
		this.totalPrice.innerHTML = model.getTotalMenuPrice();

		
		var myNode = container.querySelector("#selectedDish");
		while (myNode.firstChild) {
			// statement
			myNode.removeChild(myNode.firstChild);
		}
		this.confirmDinnerButton.style.background = '#A9A9A9';



		if (model.getFullMenu().length !== 0) {
			model.getFullMenu().forEach(function(dish){
				var newdiv = document.createElement("div");
				newdiv.classList.add("col-xs-12");

				var name = document.createElement("p");
				name.style = "float:left";
				name.innerHTML = dish.title;

				var price = document.createElement("p");
				price.style = "float:right";
				price.innerHTML = model.getSinglePrice(dish);

				newdiv.appendChild(name);
				newdiv.appendChild(price);

				myNode.appendChild(newdiv);
			})

			this.confirmDinnerButton.style.background = 'orange';
			this.confirmDinnerButton.disabled = false;
		
		}

		console.log("sidebar/screenTwoView的update功能");
	 }
	 

	
	model.addObserver(this);

	
    }



}

 
