// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		state: 'dropped',
		width: 0,
		maxX: 0,
		mouseX: 0,
		startX: 0,
		elemX: null
	},

	setElemX: function( value ) {
		var maxX = this.get( 'maxX' );

		if ( value > maxX ) {
			value = maxX;
		};

		if ( value < 0 ) {
			value = 0;
		};

		this.set( 'elemX', value );
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	events: {
		'mousedown' : 'delegateController'
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

	render: function( value ) {
		this.$el.css({ left: value });	
		return this;
	},

});

/******************** Controller ********************/

var Controller = function( mediator, model, view ) {
	_.extend( this, Backbone.Events );

	// set the mutual links
	this.mediator = mediator;
	this.model = model;
	this.view = view;
	this.view.controller = this;

	// set event listeners
	this.listenTo( this.model, 'change:elemX', this.manageElemX );
	this.listenTo( this.mediator, 'document:mouseup', this.manageMouseup );
	this.listenTo( this.mediator, 'document:mousemove', this.manageMousemove );
	this.listenTo( this.mediator, 'scrollbarWidth', this.setMaxX );
};
			/**************************
			 *          Init          *
			 **************************/

Controller.prototype.init = function() {
	this.setWidth();
	this.getScrollbarWidth();
	this.model.setElemX( 0 );
}

			/**************************
			 *         Actions        *
			 **************************/

Controller.prototype.setWidth = function() {
	var width = this.view.$el.outerWidth();
	this.model.set( 'width', width );
};

Controller.prototype.getScrollbarWidth = function() {
	this.mediator.trigger( 'getScrollbarWidth' );
};

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageElemX = function( model, value ) {
	this.mediator.trigger( 'handleChange', value );
	this.view.render( value );
};

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {

	switch ( event.type ) {
		case 'mousedown':

			// only by left mouse button
			if ( event.which === 1 ) {
				this.model.set( 'state', 'dragging' );
				this.model.set( 'mouseX', event.clientX );
				this.model.set( 'startX', this.model.get( 'elemX' ) );
			}
			break;

	};

};

			/**************************
			 *     Mediator events    *
			 **************************/

Controller.prototype.manageMouseup = function( event ) {
	this.model.set( 'state', 'dropped' );
};

Controller.prototype.manageMousemove = function( event ) {
	if ( this.model.get( 'state' ) === 'dragging' ) {
		var mouseX = this.model.get( 'mouseX' );
		var startX = this.model.get( 'startX' );

		this.model.setElemX( event.clientX - mouseX + startX );
	};
};

Controller.prototype.setMaxX = function( scrollbarWidth ) {
	var width = this.model.get( 'width' );
	this.model.set( 'maxX', scrollbarWidth - width );
};

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
