define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone ) {
	
	/******************** Models ********************/

	var AmountModel = Backbone.Model.extend({
		defaults: {
			amount: 0
		}
	});

	/******************** Views ********************/

	var AmountView = Backbone.View.extend({
		el: document.getElementsByClassName( 'shopping-cart__amount' )[0],

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.listenTo( this.model, 'change:amount', this.render );
		},

		render: function( model, value ) {
			// for manual render
			if ( !value ) {
				value = this.model.get( 'amount' );
			};

			this.$el.html( value );
			return this;
		},
	});

	/******************** Constructor ********************/

	var AmountConstructor = function() {
		this.amountModel = new AmountModel();
		this.amountView = new AmountView({ model: this.amountModel });

		this.amountView.render();
	};

	return AmountConstructor;
});