define(['jquery', 'underscore' , 'backbone', './mediator'], function( $, _, Backbone, mediator ) {

	/******************** Model ********************/

	var Thumb = Backbone.Model.extend({
		defaults: {
			state: null,
			imgSrc: null
		},

		initialize: function() {
			this.on( 'change:state', this.stateNotification );
		},

		// notify collection
		stateNotification: function( model, state, options ) {
			this.trigger( 'stateChange', model, state );
		},
	});

	/******************** Collection ********************/

	var ThumbCollection = Backbone.Collection.extend({
		model: Thumb,

		initialize: function() {
			this.on( 'stateChange', this.manageState );
		},

		// manage models state
		manageState: function( model, state ) {
			if ( state === 'active' ) {
				this.setOnlyState( model );
			}
		},

		// make sure there is only one model with this state
		setOnlyState: function( model, state ) {

			// if pointed, set this state, if not - it will be set to null
			if ( state ) {
				model.set( 'state', state );
			};

			var restModels = this.without( model );

			_.each( restModels, function( model ) {
				model.set( 'state', null );
			} );
		},
	});

	/******************** View ********************/

	var ThumbView = Backbone.View.extend({

		render: function( state ) {
			if ( state === 'active' ) {
				this.$el.addClass( 'product__thumbwrap--active' );
			} else {
				this.$el.removeClass( 'product__thumbwrap--active' );
			};

			return this;
		},

		 events: {
		 	'click' : 'delegateController'
		 },

		 // delegate managing user actions to controller
		 delegateController: function( event ) {
		 	this.controller.manageAction( event );
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
		this.listenTo( this.model, 'change:state', this.manageModelChange );
	};

	// manage model change
	Controller.prototype.manageModelChange = function( model, state ) {
		if ( state === 'active' ) {
			this.notify();
		};

		this.view.render( state );
	};

	// manage user actions
	Controller.prototype.manageAction = function( event ) {
		if ( event.type === 'click' ) {
			this.updateModel();
		}
	};

	Controller.prototype.updateModel = function() {
		this.model.set( 'state', 'active' );
	};

	// Notify the global mediator of changing state to perform 
	// interaction with other entities
	Controller.prototype.notify = function() {
		mediator.trigger( 'productView:activeChange', this.model.get( 'imgSrc' ) );
	};


	return { 
		Collection: ThumbCollection,
		Model: Thumb,
		View: ThumbView,
		Controller: Controller
	};

});