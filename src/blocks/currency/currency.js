define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone ) {

	/******************** Templates ********************/

	var iconTemplate = '<i class="currency__icon fa <%= icon %>"></i>';

	/******************** Models ********************/

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

	/******************** Views ********************/

	var CurrencyView = Backbone.View.extend({

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.listenTo( this.model, 'change:currency', this.render );
		},

		template: _.template( iconTemplate ),

		render: function( model, currency ) {
			// for manual render 
			if ( !currency ) {
				currency = this.model.get( 'currency' );
			};

			var iconClass;

			switch ( currency ) {
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

	/******************** Constructor ********************/

	var init = function( elements ) {
		var currencyCollection = new CurrencyCollection();

		var $currencies = $( elements );
		
		$currencies.each( function() {

			var model = currencyCollection.add({});
			var currencyView = new CurrencyView({ el: this, model: model });

		} );

		currencyCollection.setCurrency( 'euro' );
	};

	return { init: init };
});