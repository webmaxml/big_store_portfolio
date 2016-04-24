// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var mediator = require( '../mediator' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		state: null,
		index: 0,
		imgSrc: '',
		imgSrcFull: '',
		imgAlt: ''
	},
});

/******************** View ********************/

var View = Backbone.View.extend({

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
	this.listenTo( mediator, 'discardState', this.manageMediator );
};

// manage model change
Controller.prototype.manageModelChange = function( model, state ) {
	if ( state === 'active' ) {
		// Notify mediator of changing state
		mediator.trigger( 'activeChange', this.model.attributes );
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
};

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
