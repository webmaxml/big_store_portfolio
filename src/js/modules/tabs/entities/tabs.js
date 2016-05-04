// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		index: 0,
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

	render: function( state ) {
		if ( state === 'active' ) {
			this.$el.addClass( 'tabs__item--active' );
		} else {
			this.$el.removeClass( 'tabs__item--active' );
		}
		
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
	this.listenTo( this.model, 'change:state', this.manageModelChange );
	this.listenTo( this.mediator, 'activeChange', this.manageMediator);
};

// manage model change
Controller.prototype.manageModelChange = function( model, state ) {
	this.view.render( state );
};

// manage user actions
Controller.prototype.manageAction = function( event ) {
	this.mediator.trigger( 'activeChange', this.model.get( 'index' ) );
};

// manage mediator events
Controller.prototype.manageMediator = function( index ) {

	// set active tab with the same index, turn off the rest
	if ( this.model.get( 'index' ) === index ) {
		this.model.set( 'state', 'active' );
	} else {
		this.model.set( 'state', null );
	}
}

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
