// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var Isotope = require( 'isotope-layout' );

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
	this.listenTo( this.mediator, 'some', this.manageSome );
};

			/**************************
			 *     Public actions     *
			 **************************/

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageModelChange = function() {
	this.view.render();
};

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {
	switch ( event.type ) {
		case 'click':
			this.model.set( 'state', 'active' );
			break;
	};
};

			/**************************
			 *     Mediator events    *
			 **************************/

Controller.prototype.manageSome = function() {

};

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
