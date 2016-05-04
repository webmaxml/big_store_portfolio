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

	render: function( state ) {
		if ( state === 'active' ) {
			this.$el.addClass( 'product-desc__pane--active' );
		} else {
			this.$el.removeClass( 'product-desc__pane--active' );
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
	this.listenTo( this.mediator, 'activeChange', this.manageActiveChange );
};

// manage model change
Controller.prototype.manageModelChange = function( model, state ) {
	this.view.render( state );
};

Controller.prototype.manageActiveChange = function( index ) {
	
	// set active pane with the same index as tab, turn off the rest
	if ( this.model.get( 'index' ) === index ) {
		this.model.set( 'state', 'active' );
	} else {
		this.model.set( 'state', null );
	}
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
