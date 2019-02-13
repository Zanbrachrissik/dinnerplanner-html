//DinnerModel Object constructor
class DinnerModel {

    constructor(){
	this.dishes = new Array();
	
	this._observers = [];
	this.menu = new Array();

	this.GuestsNumber = 1;
	this.currentId = 0;
	this.dishNumber = 10;

    }

	setNumberOfGuests(num) {
		this.GuestsNumber = num;
		console.log("Guests number sets to "+ this.GuestsNumber);
		this.notifyObservers('GuestsChanged');
	}
	
	getNumberOfGuests() {
		return this.GuestsNumber;
	}

	getSelectedDish(type) {
		return this.getAllDishes(type);

	}

	getFullMenu() {
		return this.menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	getAllIngredients() {
		var allIngredients = new Array();
		this.getFullMenu().forEach(function(dish){
			allIngredients.push(dish.ingredients);
		})
		return allIngredients;
	}

	getDishDetails(){
		return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + this.currentId+"/information",{
		        headers:{   
		            'X-Mashape-Key': "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
		        }
		  })
		.then(response => response.json())
	}

	getSinglePrice(dish){
		
		return dish.pricePerServing;
	}

	getTotalMenuPrice(){
		var totalPrice=0;
		this.menu.forEach(function(dish){
			totalPrice += dish.pricePerServing;
		})
		var sumPrice = totalPrice * this.GuestsNumber;
		return sumPrice;
	}


	removeDishFromMenu(id) {
		var dish = this.getDish(id);
		var index = this.menu.indexOf(dish);
		this.menu.splice(index,1);
		this.notifyObservers();
	}

	addDishToMenu(id) {
		for(let dsh of this.menu){
			if(dsh.id == id) {
			    this.removeDishFromMenu(id);
			    return;
			}
		}
		var dish = this.getDish(id);
		this.menu.push(dish);
		this.notifyObservers();
	}

	setCurrentId(id){
		this.currentId=id;
		this.notifyObservers();
	}

	setDishes(dishes){
		this.dishes = dishes;
	}

	getAllDishes(type,filter){
		return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&instructionsRequired=true&number="+this.dishNumber+"&cuisine="+filter+"&type="+type,{
		        headers:{   
		            'X-Mashape-Key': "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
		        }
		  })
		.then(response => response.json())
		.then(data => data.results)


	}

	//function that returns a dish of specific ID
	getDish (id) {
	    for(let dsh of this.dishes){
			if(dsh.id == id) {
			    return dsh;
			}
		}
	    return undefined;
	}

	showMore(){
		this.dishNumber += 10;
		this.notifyObservers('showMore');
	}




	addObserver(observer){
		this._observers.push(observer);
	}

	notifyObservers(arg){
		for (var i = 0; i < this._observers.length; i++) {
			this._observers[i].update(arg);
		}
	}
}



var a = new DinnerModel();
a.getAllDishes("vegetarian","main course");

