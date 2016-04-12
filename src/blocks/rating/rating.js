define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone ) {


	/******************** Models ********************/

	var Model = Backbone.Model.extend({
		defaults: {
			index: null,
			state: null,
			full: false
		},

		initialize: function() {
			this.on( 'change:state', this.stateNotification );
		},

		stateNotification: function( model, state, options ) {
			this.trigger( 'stateChange', model, state );
		},

	});


	/******************** Collections ********************/

	var Collection = Backbone.Collection.extend({
		model: Model,
		comparator: 'index',

		initialize: function( options ) {
			this.setEventListeners();
			this.activeModel = null;
		},

		setEventListeners: function() {
			this.on( 'stateChange', this.manageState );
		},

		/***************************
		 *     STATE MANAGING      *
		 ***************************/

		manageState: function( model, state ) {
			switch ( state ) {
				case 'active':
					this.manageActive( model );
					break;
				case 'hover':
					this.manageHover( model );
					break;
				case 'unhover':
					this.manageUnhover();
					break;
			};
		},

		manageActive: function( model ) {
			this.activeModel = model;

			this.setOnlyState( model );
			this.manageFull( model );
		},

		manageHover: function( model ) {
			this.setOnlyState( model );
			this.manageFull( model );
		},

		manageUnhover: function() {
			this.setOnlyState( this.activeModel, 'active' );
			this.manageFull( this.activeModel );
		},

		/***************************
		 *		   HELPERS         *
		 ***************************/

		// make all stars full before and empty after
		manageFull: function( model ) {

			var activeIndex = this.models.indexOf( model );

			var fullPart = this.models.slice( 0, activeIndex + 1 );
			var emptyPart = this.models.slice( activeIndex + 1 );

			this.setFullStar( fullPart, true );
			this.setFullStar( emptyPart, false );
		},

		setFullStar: function( models, state ) {
			_.each( models, function( model ) {
				model.set( 'full', state );
			} );
		},

		// make sure there is only one model with this state
		setOnlyState: function( model, state ) {
			if ( state ) {
				model.set( 'state', state );
			};

			var restModels = this.without( model );

			_.each( restModels, function( model ) {
				model.set( 'state', null );
			} );
		},

		// set rating from outside code
		setRating: function( rating ) {
			this.activeModel = this.at( rating - 1 );
			this.manageUnhover();
		}

	});

	/******************** Views ********************/

	var StarContainer = Backbone.View.extend({

		el: document.getElementsByClassName( 'rating' )[0],

		initialize: function() {

			var collection = this.collection

			this.$el.find( '.rating__star' ).each( function( i ) {

				// create a model and a view for every star
				var model = collection.add({ index: i });
				var star = new Star({ el: this, model: model });

			} );
		}

	});

	var Star = Backbone.View.extend({

		setEventListeners: function() {
			this.listenTo( this.model, 'change:full', this.render );
		},

		initialize: function() {
			this.setEventListeners();
		},

		render: function( model, active ) {
			if ( active ) {
				this.$el.addClass( 'rating__star--active' );
			} else {
				this.$el.removeClass( 'rating__star--active' );
			}

			return this;
		},

		/***************************
		 *		 CONTROLLER        *
		 ***************************/

		events: {
			'click': 'updateModel',
			'mouseenter': 'updateModel',
			'mouseleave': 'updateModel'
		},

		updateModel: function( event ) {
			switch( event.type ) {
				case 'click':
					this.model.set( 'state', 'active' );
					break;
				case 'mouseenter':
					this.model.set( 'state', 'hover' );
					break;
				case 'mouseleave':
					this.model.set( 'state', 'unhover' );
					break;
			};
		},

	});

	/******************** Constructor ********************/

	var RatingConstructor = function() {
		this.collection = new Collection();
		this.ratingContainer = new StarContainer({ collection: this.collection });

		this.collection.setRating( 2 );
	};

	return RatingConstructor;

});
