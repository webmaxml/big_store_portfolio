// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );


/******************** View ********************/

var View = Backbone.View.extend({

	events: {
		'resize' : 'debounced',
	},

	debounced: _.debounce( function( event ) {
		this.controller.mediator.trigger( 'window:resize', event );
	}, 500 ),

});

/******************** Controller ********************/

var Controller = function( mediator, model, view ) {
	_.extend( this, Backbone.Events );

	// set the mutual links
	this.mediator = mediator;
	this.model = model;
	this.view = view;
	this.view.controller = this;
};


module.exports = { 
 	View: View,
 	Controller: Controller
};
