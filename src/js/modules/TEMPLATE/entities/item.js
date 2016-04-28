// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var itemTemplate = require( '../templates/item.jade' );

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

		this.$el.html( itemTemplate({}) );
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

};

// manage model change
Controller.prototype.manageModelChange = function() {
	this.view.render();
};

// manage user actions
Controller.prototype.manageAction = function( event ) {
	if ( event.type === 'click' ) {
		this.model.set( 'state', 'active' );
	}
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
