define(['jquery', 'underscore' , 'backbone', './mediator', './templates'], 
function( $, _, Backbone, mediator, templates ) {

	/******************** Model ********************/

	var Image = Backbone.Model.extend({
		defaults: {
			imgSrc: null
		}
	});

	/******************** View ********************/

	var ImageView = Backbone.View.extend({

		template: _.template( templates.productImg ),

		render: function( value ) {
			this.$el.html( this.template({ src: value }) );
			return this;
		},

	});

	/******************** Controller ********************/

	var Controller = function( model, view ) {
		_.extend( this, Backbone.Events );

		// set the mutual links
		this.model = model;
		this.view = view;
		this.view.controller = this;

		// set event listeners
		this.listenTo( this.model, 'change:imgSrc', this.manageModelChange );
		this.listenTo( mediator, 'productView:activeChange', this.updateModel );

	};

	// manage model change
	Controller.prototype.manageModelChange = function( model, value ) {
		this.view.render( value );
	};

	Controller.prototype.updateModel = function( src ) {
		this.model.set( 'imgSrc', src );
	};


	return { 
		Model: Image,
		View: ImageView,
		Controller: Controller
	};

});