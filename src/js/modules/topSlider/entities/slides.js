define(['jquery', 'underscore', 'backbone', 'text!./../templates/sliderItem.html', './../mediator', 'owlCarousel'], 
function( $, _, Backbone, sliderTemplate, mediator ) {

	/******************** Model ********************/

	var Model = Backbone.Model.extend({
		defaults: {
			imgSrc: '',
			imgAlt: '',
			header: '',
			text: ''
		}
	});

	/******************** Collection ********************/

	var Collection = Backbone.Collection.extend({
		model: Model,
	});

	/******************** View ********************/

	var View = Backbone.View.extend({

		className: 'top-slider__item',

		template: _.template( sliderTemplate ),

		render: function() {

			this.$el.html( this.template( this.model.attributes ) );

			return this;
		},

	});


	return { 
		Model: Model,
		Collection: Collection,
		View: View
	};

});