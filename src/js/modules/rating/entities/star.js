// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var mediator = require( '../mediator.js' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		index: 0,
		state: null,
		fill: false
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	initialize: function() {

		// cache the button
		this.$button = this.$el.find( 'button' );
	},

	events: {
		'click' : 'delegateController',
		'mouseenter': 'delegateController',
		'mouseleave': 'delegateController'
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

	render: function( value ) {

		if ( value ) {
			this.$button.addClass( 'rating__star--active' );
		} else {
			this.$button.removeClass( 'rating__star--active' );
		}

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
	this.listenTo( this.model, 'change:fill', this.manageStarFill );
	this.listenTo( mediator, 'manageFill', this.manageFill );
};

			/**************************
			 *      Model Change      *
			 **************************/

// on star filling change
Controller.prototype.manageStarFill = function( model, value ) {
	this.view.render( value );
};

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {
	switch ( event.type ) {
		case 'click':
			mediator.trigger( 'setRating', this.model.get( 'index' ) );
			break;
		case 'mouseenter':
			mediator.trigger( 'hover', this.model.get( 'index' ) );
			break;
		case 'mouseleave':
			mediator.trigger( 'unhover' );
			break;
	};
};

			/**************************
			 *     Mediator orders    *
			 **************************/

Controller.prototype.manageFill = function( index ) {

	// make every star behind fill, and every after - empty
	if ( this.model.get( 'index' ) <= index ) {
		this.model.set( 'fill', true );
	} else {
		this.model.set( 'fill', false );
	}
};

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
