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
class ConfirmPageView {
    constructor (container, model) {
	this.container=container;
	this.model=model;
	this.backToSearchPage = container.querySelector("#backButtonScreenFour");
	this.printRecipe = container.querySelector("#printRecipe");


		this.update = function(){
			// this.orderedDishes=model.getAllDishes('','');
			this.orderedDishes=model.menu;
			var myNode = container.querySelector("#showOrderedDish");
			myNode.innerHTML = "";
			this.orderedDishes.forEach(function(dish){
						var newdiv = document.createElement("div");
						newdiv.style = "text-align:center;margin-top:40px;";
						//newdiv.id = dish.id;
						newdiv.classList.add("col-xs-12");
						newdiv.classList.add("col-md-4");


						var img = document.createElement("img");
						//img.style = "width: 100%;height:140px";
						img.src = dish.image;
						img.height = 150;
						img.width = 150;

						var txt = document.createElement("p");
						txt.innerHTML = dish.title;
						txt.style = "width: 150px; text-align: center;";
						txt.classList.add("mx-auto");

						var price = document.createElement("h4");
						price.style = "text-align: right;";
						price.innerHTML=model.getSinglePrice(dish) + " SEK";
						newdiv.appendChild(img);
						newdiv.appendChild(txt);
						newdiv.appendChild(price);
						myNode.appendChild(newdiv);
					})

			var totalPriceNode = container.querySelector("#totalPrice");
			totalPriceNode.innerHTML = model.getTotalMenuPrice() + " SEK";

			var numberOfGuestsNode = container.querySelector("#numberOfGuests");
			numberOfGuestsNode.innerHTML = model.getNumberOfGuests() + " people";

			
			}

		model.addObserver(this);

    }


}
 
