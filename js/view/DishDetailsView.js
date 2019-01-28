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
			    	console.log("加入click功能2");
			    	//toDishDetailsView();
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
			var dish=model.getDish(model.currentId);
			if(model.currentId !== 0){
				var prepText = new Array();
				container.querySelector("#Intro").innerHTML = dish.description;
				dish.ingredients.forEach(function(ingredient){
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