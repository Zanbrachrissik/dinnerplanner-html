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
class View_Four {
    constructor (container, model) {
	this.container=container;
	this.model=model;

	/**
	 * numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * IMPORTANT: Never use document.querySelector() directly in the views. Always use
	 * some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	// this.numberOfGuests = container.querySelector("#numberOfGuests");

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
	// this.plusButton = container.querySelector("#plusGuest");
	// this.minusButton = container.querySelector("#minusGuest");
	
	/**
	 * Here we use numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	 //console.log(model.getNumberOfGuests());
	// this.numberOfGuests.innerHTML=model.getNumberOfGuests();

		this.update = function(){
			// this.orderedDishes=model.getAllDishes('','');
			this.orderedDishes=model.menu;
			var myNode = container.querySelector("#showOrderedDish");
			myNode.innerHTML = "";
			this.orderedDishes.forEach(function(dish){
						var newdiv = document.createElement("div");
						newdiv.style = "text-align:center;margin-top:40px;";
						newdiv.id = dish.id;
						newdiv.classList.add("col-xs-12");
						newdiv.classList.add("col-md-3");


						var img = document.createElement("img");
						img.src = "images/"+dish.image;

						var txt = document.createElement("p");
						txt.innerHTML = dish.name;
						txt.style = "width: 140px; text-align: center;border-style: solid";
						txt.classList.add("mx-auto");
						newdiv.appendChild(img);
						newdiv.appendChild(txt);
						myNode.appendChild(newdiv);
					})

			var totalPriceNode = container.querySelector("#totalPrice");
			totalPriceNode.innerHTML = model.getTotalMenuPrice() + " SEK";

			var numberOfGuestsNode = container.querySelector("#numberOfGuests");
			numberOfGuestsNode.innerHTML = model.getNumberOfGuests() + " people";

			
			}

		model.addObserver(this);

    }



    // in lab 2, the Observer update method will come here
}
 
