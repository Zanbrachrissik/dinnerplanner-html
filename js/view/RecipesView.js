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
class RecipesView {
    constructor (container, model) {
	this.container=container;
	this.model=model;


		this.update = function(){
			// this.orderedDishes=model.getAllDishes('','');
			this.orderedDishes=model.menu;
			var myNode = container.querySelector("#OrderedDishRecipes");
			myNode.innerHTML = ""
			this.orderedDishes.forEach(function(dish){
					var newRow = document.createElement("div");
					newRow.classList.add("row");
					newRow.style = "width:100%"

					var imageCol = document.createElement("div");
					imageCol.style = "text-align:center;margin-top:40px;width: 100%;height:100%";
					imageCol.id = dish.id;
					imageCol.classList.add("col-xs-12");
					imageCol.classList.add("col-md-2");
					var img = document.createElement("img");
					img.src = "images/"+dish.image;
					imageCol.appendChild(img);
					newRow.appendChild(imageCol);


					var descCol = document.createElement("div");
					// descCol.style = "text-align:center;margin-top:40px;";
					descCol.classList.add("col-xs-12");
					descCol.classList.add("col-md-4");

					var titleTxt = document.createElement("h3");
					titleTxt.innerHTML = dish.name;
					// titleTxt.style = "width: 140px; text-align: center";
					titleTxt.classList.add("mx-auto");
					descCol.appendChild(titleTxt);

					var descTxt = document.createElement("p");
					descTxt.innerHTML = dish.description;
					// descTxt.style = "width: 140px; text-align: center";
					descTxt.classList.add("mx-auto");
					descCol.appendChild(descTxt);

					newRow.appendChild(descCol);



					var prepCol = document.createElement("div");
					// prepCol.style = "text-align:center;margin-top:40px;";
					prepCol.classList.add("col-xs-12");
					prepCol.classList.add("col-md-6");

					var prepHeading = document.createElement("h5");
					prepHeading.style="margin-top:30px";
					prepHeading.innerHTML = "PREPARATION";
					// titleTxt.style = "width: 140px; text-align: center";
					prepHeading.classList.add("mx-auto");
					prepCol.appendChild(prepHeading);

					var prepTxt = document.createElement("p");
					prepTxt.innerHTML = dish.description;
					// prepTxt.style = "width: 140px; text-align: center";
					prepTxt.classList.add("mx-auto");
					prepCol.appendChild(prepTxt);

					newRow.appendChild(prepCol);

					myNode.appendChild(newRow);
					
				})


			var numberOfGuestsNode = container.querySelector("#numberOfGuestsRecipes");
			numberOfGuestsNode.innerHTML = model.getNumberOfGuests() + " people";

			
		}

		model.addObserver(this);

    }



    // in lab 2, the Observer update method will come here
}
 
