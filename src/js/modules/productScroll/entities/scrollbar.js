// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		state: null
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	events: {
		'click' : 'delegateController'
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

	render: function() {

		
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
	this.listenTo( this.model, 'change', this.manageModelChange );
	this.listenTo( this.mediator, 'window:resize', this.manageResize );
};

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageModelChange = function() {
	this.view.render();
};

			/**************************
			 *       User input       *
			 **************************/

// manage user actions
Controller.prototype.manageAction = function( event ) {

	switch ( event.type ) {
		case 'click':
			console.log( 'resize' );
			break;
	};

};

			/**************************
			 *     Mediator orders    *
			 **************************/

Controller.prototype.manageResize = function( event ) {
	console.log( event );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
