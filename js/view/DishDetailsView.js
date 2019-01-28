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
			    	toDishDetailsView();
			    	model.setCurrentId(innerDivId);
			    })
			    console.log(innerDivId);
			});
		}

		this.bindClickEvents = function(){
			$( document ).on( "click", ".newdivClick", function() {
				console.log("加入click功能");});
		}

		this.update = function(){
			this.attachDetailsView();
			this.bindClickEvents();

			console.log("详情页 DishDetailsView的update");

		}


		model.addObserver(this);
		console.log("注册Observer");
	}
}