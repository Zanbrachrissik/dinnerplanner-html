class DishSearchView{
	
	constructor(container,model, navigationDelegate){
		this.container=container;
		this.model=model;
		this.allDishes=[];
		this.searchButton = container.querySelector("#searchButton");

		this.search = function(){
			var input=document.getElementById("dishKeyword").value;

			var e = document.getElementById("foodType");
			var type = e.options[e.selectedIndex].value;
			console.log(input);
			console.log(type);
			this.allDishes = model.getAllDishes(type,input)
			console.log(this.allDishes);
			
			var myNode = container.querySelector("#showDish");

			//或者是 document.getElementId("showDish")  没有“#”
			while (myNode.firstChild) {
    			myNode.removeChild(myNode.firstChild);
			}
			this.allDishes.forEach(function(dish){
				var newdiv = document.createElement("div");
				newdiv.style = "text-align:center;margin-top:40px;";
				newdiv.id = dish.id;
				newdiv.classList.add("col-xs-12");
				newdiv.classList.add("col-md-3");

				var dishTile = new DishTileView(newdiv,model,dish);

				myNode.appendChild(newdiv);
				var dishTileVC = new DishTileVC(newdiv,model,dish.id,navigationDelegate);

			})

			//model.notifyObservers();
		}


		this.update = function(){
			console.log("搜索页：DishSearchView的update");


		}



		model.addObserver(this);

	}
}