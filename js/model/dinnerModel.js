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


	// getTotalMenuPrice() {
	// 	var totalPrice=0;
	// 	this.menu.forEach(function(dish){
	// 		var singlePrice = 0;
	// 		dish.ingredients.forEach(function(ingredient){
	// 			singlePrice+=ingredient.price;
	// 		})
	// 		totalPrice+=singlePrice;
	// 	})
	// 	var sumPrice = totalPrice * this.GuestsNumber;
	// 	return sumPrice;
	// }
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

    
	// getAllDishes(type,filter) {
	// 	if (type == ''&& filter == '') {
	// 		//this.notifyObservers();
	// 		return this.dishes;
	// 	}
	// 	else{
	// 		//this.notifyObservers();
	// 		return this.dishes.filter(function(dish) {
	// 			let found = true;
	// 			if(filter){
	// 				found = false;
	// 				dish.ingredients.forEach(function(ingredient) {
	// 					if(ingredient.name.indexOf(filter)!=-1) {
	// 						found = true;
	// 					}
	// 				});
	// 				if(dish.name.indexOf(filter) != -1)
	// 				{
	// 					found = true;
	// 				}
	// 			}
	// 		  	return dish.type == type && found;
	// 	  });
	// 	}
	// }

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
		// .catch(error => {
		// 	console.log(error);
		// 	var myNode = document.querySelector("#showDish");
		// 	console.log("failed");
		// 	while (myNode.firstChild) {
  //   			myNode.removeChild(myNode.firstChild);
		// 	};

		// 	var errorDiv = document.createElement("div");
		// 	errorDiv.style = " width: 100%;text-align:center;margin-top:40px";

		// 	var message = document.createElement("p");
		// 	message.innerHTML = "Sorry, the food was stolen on its way."

		// 	var image = document.createElement("img");
		// 	img.src = "errorMessage.gif";

		// 	errorDiv.appendChild(image);
		// 	errorDiv.appendChild(message);
		// })
		// .then(function(data){
		// 	var menu = new Array();
		// 	data.results.forEach(function(dish){
		// 		menu.push(dish);
		// 	})
		// 	console.log("DinnerModel里的menu:"+menu);
		// 	return menu;
		// })
		// .then(data => data.dishes)
		//.then(console.log)
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


	/*****************************************  
	      Observable implementation    
	*****************************************/

        const dishesConst = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}

	];


/*			test code

	var y = new DinnerModel();
	y.setNumberOfGuests(3);

	y.addDishToMenu(1);
	y.addDishToMenu(2);
	y.addDishToMenu(202);
	console.log(y.getAllDishes('starter','French toast'));
	y.getFullMenu().forEach(function(dish){
		console.log(y.getSinglePrice(dish));
	})


	
	console.log(y.getFullMenu());
	/*y.removeDishFromMenu(2);
	console.log(y.getAllIngredients());
	console.log(y.getTotalMenuPrice());*/


var a = new DinnerModel();
a.getAllDishes("vegetarian","main course");

