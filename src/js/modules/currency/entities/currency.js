// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		currency: ''
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	render: function( value ) {

		var iconClass;

		switch ( value ) {
			case 'dollar':
				iconClass = 'fa-dollar';
				break;
			case 'euro':
				iconClass = 'fa-eur';
				break;
		};

		this.$el.addClass( 'fa ' + iconClass );

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
	this.listenTo( this.model, 'change:currency', this.manageModelChange );
	this.listenTo( this.mediator, 'setCurrency', this.setCurrency );
};

// manage model change
Controller.prototype.manageModelChange = function( model, value ) {
	this.view.render( value );
};


Controller.prototype.setCurrency = function( curr ) {
	this.model.set( 'currency', curr );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
