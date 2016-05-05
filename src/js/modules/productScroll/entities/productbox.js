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

	render: function( width ) {

		this.$el.css( 'width', width );
	
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

			/**************************
			 *     Initialization     *
			 **************************/

Controller.prototype.setWidth = function() {
	// calc the width from its content

	var itemBoxWidth = 0;

	this.view.$el.children().each( function() {
		itemBoxWidth += $( this ).outerWidth( true );
	} );

	this.view.render( itemBoxWidth );
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

Controller.prototype.manageAction = function( event ) {

	switch ( event.type ) {
		case 'resize':
			console.log( 'resize' );
			break;
	};
	
};

			/**************************
			 *     Mediator orders    *
			 **************************/

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
