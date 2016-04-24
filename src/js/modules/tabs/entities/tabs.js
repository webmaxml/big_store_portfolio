// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var mediator = require( '../mediator.js' );

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

var Controller = function( model, view ) {
	_.extend( this, Backbone.Events );

	// set the mutual links
	this.model = model;
	this.view = view;
	this.view.controller = this;

	// set event listeners
	this.listenTo( this.model, 'change:state', this.manageModelChange );
	this.listenTo( mediator, 'discardState', this.manageMediator);
};

// manage model change
Controller.prototype.manageModelChange = function( model, state ) {
	if ( state === 'active' ) {
		mediator.trigger( 'activeChange', this.model.get( 'index' ) );
	};

	this.view.render( state );
};

// manage user actions
Controller.prototype.manageAction = function( event ) {
	if ( event.type === 'click' ) {
		this.model.set( 'state', 'active' );
	}
};

// manage mediator events
Controller.prototype.manageMediator = function( index ) {
	// discard state of every thumb except active
	if ( this.model.get( 'index' ) !== index ) {
		this.model.set( 'state', null );
	}
}

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
