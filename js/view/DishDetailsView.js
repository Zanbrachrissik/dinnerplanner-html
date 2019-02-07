class DishDetailsView{
	constructor(container, model){
		this.container=container;
		this.model=model;
		this.backToSearch = container.querySelector("#backToSearch");
		this.backToMenu = container.querySelector("#addToMenu");
		this.detailslocalcopy;
		this.introduction = container.querySelector("#Intro");
		this.preparation = container.querySelector("#Preparation");
		this.ingredients = container.querySelector("#ingredients");

		this.showContents = function(){

			var guestNumber = model.getNumberOfGuests();
			//var dish=model.getDish(model.currentId);
			
			container.querySelector("#guestNumber").innerHTML = guestNumber;

			while(this.introduction.firstChild){
				this.introduction.removeChild(this.introduction.firstChild);
			}

			while(this.ingredients.firstChild){
				this.ingredients.removeChild(this.ingredients.firstChild);
			}

			var newdiv = document.createElement("div");
			newdiv.style = "width: 100%;height: 800px;text-align:center;line-height:600px;";
			var img = document.createElement("img");
			img.src = "fruits-lemon.gif";
			img.style = "vertical-align: middle;"

			newdiv.appendChild(img);
			this.introduction.appendChild(newdiv);

			if(model.currentId !== 0){
				model.getDishDetails().then(dish => {
					this.detailslocalcopy = dish;
					renderFetchedData(this.detailslocalcopy, this, model);
				}).catch(error =>{
					console.log(error);
					while(this.introduction.firstChild){
						this.introduction.removeChild(this.introduction.firstChild);
					}
					while(this.ingredients.firstChild){
						this.ingredients.removeChild(this.ingredients.firstChild);
					}

					var errorDiv = document.createElement("div");
					errorDiv.style = " width: 100%;text-align:center;margin-top:40px";

					var message = document.createElement("h2");
					message.innerHTML = "Sorry, the food was stolen on its way."

					var img = document.createElement("img");
					img.src = "errorMessage.gif";
					img.style = "vertical-align: middle;width:200px;"

					errorDiv.appendChild(img);
					errorDiv.appendChild(message);
					this.introduction.appendChild(errorDiv);
				})
			}

			
			
		}

		function renderFetchedData(dish, view, model){
			// if(model.currentId !== 0 && this.detailslocalcopy.length == 0){
				// model.getDishDetails().then(dish => {
					while(view.introduction.firstChild){
						view.introduction.removeChild(view.introduction.firstChild);
					}
					while(view.ingredients.firstChild){
						view.ingredients.removeChild(view.ingredients.firstChild);
					}
					console.log(dish);
					var dishImage = container.querySelector("#dishImage");
					dishImage.src = dish.image;
					dishImage.height = 250;
					dishImage.width = 300;

					var prepText = new Array();
					container.querySelector("#dishName").innerHTML = dish.title;
					container.querySelector("#Intro").innerHTML = dish.instructions;
					console.log(dish);
					dish.extendedIngredients.forEach(function(ingredient){
						var div1 = document.createElement("div");
						div1.style = "text-align:center";
						div1.classList.add("col-xs-2");
						var p1 = document.createElement("p");
						p1.innerHTML = ingredient.amount * model.getNumberOfGuests() + ingredient.unit;
						p1.style.marginTop = '10px';
						div1.appendChild(p1);
						view.ingredients.appendChild(div1);

						var div2 = document.createElement("div");
						div2.style = "text-align:center";
						div2.classList.add("col-xs-6");
						var p2 = document.createElement("p");
						p2.innerHTML = ingredient.name;
						p2.style.marginTop = '10px';
						div2.appendChild(p2);
						view.ingredients.appendChild(div2);

						var div3 = document.createElement("div");
						div3.style = "text-align:center";
						div3.classList.add("col-xs-2");
						var p3 = document.createElement("p");
						p3.innerHTML = "SEK";
						p3.style.marginTop = '10px';
						div3.appendChild(p3);
						view.ingredients.appendChild(div3);

						var div4 = document.createElement("div");
						div4.style = "text-align:center";
						div4.classList.add("col-xs-2");
						var p4 = document.createElement("p");
						p4.innerHTML = 3 * model.getNumberOfGuests();
						p4.style.marginTop = '10px';
						div4.appendChild(p4);
						view.ingredients.appendChild(div4);
					})

					var a = container.querySelector("#moreInfo");
					a.innerHTML = "Click Me";
					a.setAttribute('href',dish.sourceUrl);
				
				// }
			// }
		}

		this.update = function(args){
			if (args == 'GuestsChanged') {
				renderFetchedData(this.detailslocalcopy, this, this.model)
				container.querySelector("#guestNumber").innerHTML = model.getNumberOfGuests();
			}else{
				this.showContents();
			}

			console.log("详情页 DishDetailsView的update");

		}


		model.addObserver(this);
		console.log("注册Observer");
	}
}