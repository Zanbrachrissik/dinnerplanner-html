class Test{

	constructor(){
		this.menu = new Array();
		this.dishNumber = 20;

	}

	getAllDishes(type,filter){
		return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=true&number="+this.dishNumber+"&cuisine="+filter+"&type="+type,{
		        headers:{   
		            'X-Mashape-Key': "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
		        }
		  })
		.then(response => response.json())
		// .then(function(data){
		// 	var menu = new Array();
		// 	data.results.forEach(function(dish){
		// 		menu.push(dish);
		// 	})
		// 	console.log("fetching over");
		// 	document.querySelector("p").innerHTML = "done";
		// 	console.log(menu);
		// 	return menu;
		// })
		.then(data => data.results)
		.then(console.log)
		//.then(console.log("fetching over"))
		.catch(error => {
			console.log(error);
		})
	}


}


var a = new Test();
document.querySelector("p").innerHTML = "loading";
a.getAllDishes("vegetarian","main course");