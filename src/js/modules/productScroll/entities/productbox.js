// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		width: 0,
		step: 0,
		offset: 0
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	setWidth: function( width ) {
		this.$el.css( 'width', width );
		return this;
	},

	render: function( value ) {
		this.$el.css( 'marginLeft', -value );
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
	this.listenTo( this.model, 'change:width', this.manageWidthChange );
	this.listenTo( this.model, 'change:offset', this.manageOffset );
	this.listenTo( this.mediator, 'scrollbarWidth', this.setStep );
	this.listenTo( this.mediator, 'handleChange', this.setOffset );

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

Controller.prototype.manageWidthChange = function( model, value ) {
	this.view.setWidth( value );
};

Controller.prototype.manageOffset = function( model, value ) {
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

Controller.prototype.setStep = function( scrollbarWidth ) {
	var width = this.model.get( 'width' );
	var value = width / ( scrollbarWidth * 2 );

	// considering the viewport which is exactly as scrollbarWidth
	this.model.set( 'step', value );
};

Controller.prototype.setOffset = function( value ) {
	var step = this.model.get( 'step' );
	this.model.set( 'offset', step * value );
};

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
