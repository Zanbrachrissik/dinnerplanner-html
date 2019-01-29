class DishDetailsView{
	constructor(container, model){
		this.container=container;
		this.model=model;

		var dish;

		//model.getFullMenu()

		this.attachDetailsView = function(){
			$('#showDish').find('div').each(function(){
			    var innerDivId = $(this).attr('id');
			    $(this).click(function(){
			    	console.log("加入click功能");
			    	$("#DishSearchView").hide();
					$("#DishDetailsView").show();
			    	model.setCurrentId(innerDivId);
			    	console.log(innerDivId);
			    })
			});
		}

		this.toDishDetailsView = function(){
			$("#SidebarView").hide();
	    	$("#DishSearchView").hide();
			$("#DishDetailsView").show();
		}

		this.showContents = function(){

			container.querySelector("#guestNumber").innerHTML = model.getNumberOfGuests();
			var guestNumber = model.getNumberOfGuests();
			var dish=model.getDish(model.currentId);

			var div = document.querySelector("#div1");
				while (div1.firstChild) {
					div1.removeChild(div1.firstChild);
				}
			var div2 = document.querySelector("#div2");
				while (div2.firstChild) {
					div2.removeChild(div2.firstChild);
				}
			var div3 = document.querySelector("#div3");
				while (div3.firstChild) {
					div3.removeChild(div3.firstChild);
				}
			var div4 = document.querySelector("#div4");
				while (div4.firstChild) {
					div4.removeChild(div4.firstChild);
				}


			if(model.currentId !== 0){
				var prepText = new Array();
				container.querySelector("#dishName").innerHTML = dish.name;
				container.querySelector("#Intro").innerHTML = dish.description;
				dish.ingredients.forEach(function(ingredient){
					var p1 = document.createElement("p");
					p1.innerHTML = ingredient.quantity+' '+ingredient.unit;
					p1.style.marginTop = '10px';
					
					div1.appendChild(p1);

					var p2 = document.createElement("p");
					p2.innerHTML = ingredient.name;
					p2.style.marginTop = '10px';
					var div2 = document.querySelector("#div2");
					div2.appendChild(p2);

					var p3 = document.createElement("p");
					p3.innerHTML = "SEK";
					p3.style.marginTop = '10px';
					var div3 = document.querySelector("#div3");
					div3.appendChild(p3);

					var p4 = document.createElement("p");
					p4.innerHTML = ingredient.price * guestNumber;
					p4.style.marginTop = '10px';
					var div4 = document.querySelector("#div4");
					div4.appendChild(p4);

					prepText += ingredient.quantity+' '+ingredient.unit+' '+ingredient.name+', ';

				})
				container.querySelector("#preparationText").innerHTML = prepText;
			}
			
		}

		this.update = function(){
			this.attachDetailsView();
			this.showContents();

			console.log("详情页 DishDetailsView的update");

		}


		model.addObserver(this);
		console.log("注册Observer");
	}
}