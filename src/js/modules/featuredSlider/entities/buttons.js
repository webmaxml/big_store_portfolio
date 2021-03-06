// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		type: ''
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

});

/******************** Controller ********************/

var Controller = function( mediator, model, view ) {
	_.extend( this, Backbone.Events );

	// set the mutual links
	this.mediator = mediator;
	this.model = model
	this.view = view;
	this.view.controller = this;
};

// manage user actions
Controller.prototype.manageAction = function( event ) {
	if ( event.type === 'click' ) {
		this.notify();
	}
};

// Notify the module mediator
Controller.prototype.notify = function() {
	this.mediator.trigger( 'slideChange', this.model.get( 'type' ) );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};