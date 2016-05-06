// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		width: 0
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
	this.listenTo( this.model, 'change:width', this.manageModelChange );

};
			/**************************
			 *          Init          *
			 **************************/

Controller.prototype.init = function() {
	this.setWidth();
}

			/**************************
			 *         Actions        *
			 **************************/

// calc the width of the container
Controller.prototype.setWidth = function() {

	var width = 0;

	this.view.$el.children().each( function() {
		width += $( this ).outerWidth( true );
	} );

	this.model.set( 'width', width );
};

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageModelChange = function( model, value ) {
	this.view.render( value );
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
			 *     Mediator events    *
			 **************************/

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
