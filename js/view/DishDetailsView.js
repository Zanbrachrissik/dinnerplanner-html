class DishDetailsView{
	constructor(container, model){
		this.container=container;
		this.model=model;

		var dish;

		this.showContents = function(){

			var guestNumber = model.getNumberOfGuests();
			var dish=model.getDish(model.currentId);

			var div = document.querySelector("#div1");
				while (div1.firstChild) {
					div1.removeChild(div1.firstChild);
				}


			if(model.currentId !== 0){
				var dishImage = container.querySelector("#dishImage");
				dishImage.src = dish.image;

				var prepText = new Array();
				container.querySelector("#dishName").innerHTML = dish.title;
				container.querySelector("#Intro").innerHTML = dish.winePairing.pairingText;
				console.log(dish);
				dish.analyzedInstructions[0].steps.forEach(function(step){
					var p1 = document.createElement("p");
					p1.innerHTML = step.number+' '+step.step;
					p1.style.marginTop = '10px';
					
					div1.appendChild(p1);
				})
				var a = container.querySelector("#moreInfo");
				a.innerHTML = "Click Me";
				a.setAttribute('href',dish.sourceUrl);


			}
			
		}

		this.update = function(){
			//this.attachDetailsView();
			this.showContents();

			console.log("详情页 DishDetailsView的update");

		}


		model.addObserver(this);
		console.log("注册Observer");
	}
}