/** ExampleView Object constructor
 * 
 * This object represents one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view class like this for every view in your UI.
 * 
 * @param {Object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class View_Two {
    constructor (container, model) {
	this.container=container;
	this.model=model;
	//console.log(container);
	//console.log(document);


	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	 this.update = function(){
	 	this.numberOfGuests = document.getElementById("numberOfGuests");
		this.numberOfGuests.innerHTML = model.getNumberOfGuests();


		this.totalPrice = document.getElementsByClassName("totalPrice");
		this.totalPrice[0].innerHTML = model.getTotalMenuPrice();
		this.totalPrice[1].innerHTML = model.getTotalMenuPrice();

		if (model.getFullMenu().length !== 0) {
			model.getFullMenu().forEach(function(dish){
				var newdiv = document.createElement("div");
				newdiv.classList.add("w-100");

				var name = document.createElement("p");
				name.style = "float:left";
				name.innerHTML = dish.name;


				var price = document.createElement("p");
				price.innerHTML = model.getSinglePrice(dish);
			})
			
		}

		console.log("sidebar/screenTwoView的update功能");
	 }
	 

	
	model.addObserver(this);

	
    }



}

 
