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
class DishTileView {
    constructor (container, model, dish) {
	this.container=container;
	this.model=model;
	this.id = dish.id;


	var img = document.createElement("img");
	img.src = dish.image;
	img.height = 190;
	img.width = 190;

	//img.id = "dishTileDiv";
	var txt = document.createElement("p");
	txt.innerHTML = dish.title;
	txt.style = "text-align: center;margin-top:10px;font-style: italic";
	txt.classList.add("mx-auto");

	container.appendChild(img);
	container.appendChild(txt);

    }

}
 
