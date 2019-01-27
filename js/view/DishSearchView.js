class DishSearchView{
	
	constructor(container,model){
		this.container=container;
		this.model=model;
		this.allDishes=[]

		this.search = function(){
			var input=document.getElementById("dishKeyword").value;

			var e = document.getElementById("foodType");
			var type = e.options[e.selectedIndex].value;
			console.log(input);
			console.log(type);
			this.allDishes = model.getAllDishes(type,input)
			console.log(this.allDishes);
			
			var myNode = document.getElementById("showDish");
			while (myNode.firstChild) {
    			myNode.removeChild(myNode.firstChild);
			}
			this.allDishes.forEach(function(dish){
				var newdiv = document.createElement("div");
				newdiv.style = "text-align:center;margin-top:40px;";
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
		}


		this.update = function(){
			console.log("更新：DishSearchView的update");


		}



		model.addObserver(this);

	}
}