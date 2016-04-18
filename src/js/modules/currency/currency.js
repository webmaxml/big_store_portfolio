define(['jquery', 'underscore', 'backbone', './templates'], function( $, _, Backbone, templates ) {

	/******************** Model ********************/

	var CurrencyModel = Backbone.Model.extend({
		defaults: {
			currency: null
		}
	});

	/******************** Collection ********************/

	var CurrencyCollection = Backbone.Collection.extend({
		model: CurrencyModel,

		setCurrency: function( currency ) {
			this.each( function( model ) {
				model.set( 'currency', currency );
			} );
		}
	});

	/******************** View ********************/

	var CurrencyView = Backbone.View.extend({

		template: _.template( templates.iconTemplate ),

		render: function( value ) {

			var iconClass;

			switch ( value ) {
				case 'dollar':
					iconClass = 'fa-dollar';
					break;
				case 'euro':
					iconClass = 'fa-eur';
					break;
			};

			this.$el.html( this.template({ icon: iconClass }) );

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
		this.listenTo( this.model, 'change:currency', this.manageModelChange );
	};

	// manage model change
	Controller.prototype.manageModelChange = function( model, value ) {
		this.view.render( value );
	};

	return { 
		Collection: CurrencyCollection,
		Model: CurrencyModel,
		View: CurrencyView,
		Controller: Controller
	};

	
});