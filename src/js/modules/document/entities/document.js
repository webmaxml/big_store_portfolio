// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );


/******************** View ********************/

var View = Backbone.View.extend({

	events: {
		'mouseup' : 'delegateController',
		'mousemove' : 'delegateController',
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

	throttled: _.throttle( function( event ) {
		this.controller.manageAction( event );
	}, 100 )

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
	// this.listenTo( this.mediator, 'some', this.manageSome );
};

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {
	switch ( event.type ) {
		case 'mouseup':
			this.mediator.trigger( 'document:mouseup', event );
			break;
		case 'mousemove':
			this.mediator.trigger( 'document:mousemove', event );
			break;
	};
};

			/**************************
			 *     Mediator events    *
			 **************************/

// Controller.prototype.manageSome = function() {

// };

module.exports = { 
	View: View,
	Controller: Controller
};
