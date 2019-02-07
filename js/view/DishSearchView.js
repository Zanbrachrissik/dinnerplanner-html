class DishSearchView{
	
	constructor(container,model, navigationDelegate){
		this.container=container;
		this.model=model;
		this.allDishes=[];
		this.searchButton = container.querySelector("#searchButton");

		this.search = function(){
			var input=document.getElementById("dishKeyword").value;
			var e = document.getElementById("foodType");
			var myNode = container.querySelector("#showDish");

			var type = e.options[e.selectedIndex].value;
			// console.log(input);
			// console.log(type);
			while (myNode.firstChild) {
    			myNode.removeChild(myNode.firstChild);
			}

			var newdiv = document.createElement("div");
			newdiv.style = "width: 100%;height: 800px;text-align:center;line-height:600px;";
			var img = document.createElement("img");
			img.src = "fruits-lemon.gif";
			img.style = "vertical-align: middle;"

			newdiv.appendChild(img);
			myNode.appendChild(newdiv);


			model.getAllDishes(type,input).then(menu => {
				model.setDishes(menu);
				while (myNode.firstChild) {
	    			myNode.removeChild(myNode.firstChild);
				}
				menu.forEach(function(dish){
					var newdiv = document.createElement("div");
					newdiv.style = "text-align:center;margin-top:40px;";
					newdiv.id = dish.id;
					console.log(dish.id);
					newdiv.classList.add("col-xs-12");
					newdiv.classList.add("col-md-3");

					myNode.appendChild(newdiv);

					var dishTile = new DishTileView(newdiv,model,dish);
					var dishTileVC = new DishTileVC(newdiv,model,dish.id,navigationDelegate);

				})
				var div2 = document.createElement("div");
				div2.style = "width:100%;text-align:center;margin-top:40px";

				var showMore = document.createElement("button");
				showMore.innerHTML = "Show More";
				var showMoreVC =  new showMoreController(showMore,model);


				div2.appendChild(showMore);
				myNode.appendChild(div2);
			})
			.catch(error => {
				console.log(error);
				while (myNode.firstChild) {
	    			myNode.removeChild(myNode.firstChild);
				};

				var errorDiv = document.createElement("div");
				errorDiv.style = " width: 100%;text-align:center;margin-top:40px";

				var message = document.createElement("h2");
				message.innerHTML = "Sorry, the food was stolen on its way."

				var img = document.createElement("img");
				img.src = "errorMessage.gif";
				img.style = "vertical-align: middle;width:200px;"


				errorDiv.appendChild(img);
				errorDiv.appendChild(message);
				myNode.appendChild(errorDiv);
			})
			//console.log(this.allDishes);
			

			//model.notifyObservers();
		}


		this.update = function(args){
			if (args == 'showMore') {
				this.search();
			}
			//console.log("搜索页：DishSearchView的update");


		}



		model.addObserver(this);

	}
}