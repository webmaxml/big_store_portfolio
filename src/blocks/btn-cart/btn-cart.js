define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone ) {
	
	/******************** Models ********************/

	var BtnCartModel = Backbone.Model.extend({
		defaults: {
			state: null
		}
	});

	/******************** Collections ********************/

	var BtnCartCollection = Backbone.Collection.extend({
		model: BtnCartModel,
	});

	/******************** Views ********************/

	var BtnCartView = Backbone.View.extend({

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.listenTo( this.model, 'change:state', this.manageView );
		},

		manageView: function( model, state ) {
			this.render( state );
		},

		render: function( state ) {
			if ( state === 'added' ) {

				this.$el.addClass( 'btn-cart--added' )
						.find( '.btn-cart__icon' )
						.removeClass()
						.addClass('fa fa-check btn-cart__icon');

				if ( this.$el.hasClass( 'btn-cart--trending' ) ||
					 this.$el.hasClass( 'btn-cart--tech-form' ) ) {
					this.$el.find( '.btn-cart__text' )
							.html( 'Added!' );
				}

			} else {

				this.$el.removeClass( 'btn-cart--added' )
						.find( '.btn-cart__icon' )
						.removeClass()
						.addClass('fa fa-shopping-cart btn-cart__icon');

				if ( this.$el.hasClass( 'btn-cart--trending' ) ||
					 this.$el.hasClass( 'btn-cart--tech-form' ) ) {
					this.$el.find( '.btn-cart__text' )
							.html( 'Add to cart' );
				}
			}

			return this;
		},

		/***************************
		 *		 CONTROLLER        *
		 ***************************/

		 events: {
		 	'click' : 'updateModel'
		 },

		 updateModel: function() {
		 	this.model.set( 'state', 'added' );
		 },

		});

	/******************** Constructor ********************/

	var BtnCartConstructor = function() {

		var btnCartCollection = new BtnCartCollection();

		var $btns = $( document.getElementsByClassName( 'btn-cart' ) );
		
		$btns.each( function() {

			var model = btnCartCollection.add({ state: 'pending' });
			var btnView = new BtnCartView({ el: this, model: model });

		} );

	};

	return BtnCartConstructor;
});