// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var IScroll = require( 'iscroll' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		width: 0,
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	initialize: function() {
		this.productBox = this.el.querySelector( '[data-entity="product-box"]' );
		this.scrollbar = this.el.querySelector( '[data-entity="scrollbar"]' );
	},

	setScroll: function() {
		var scroll = new IScroll( this.el, {
			scrollX: true,
			scrollY: false,
			indicators: {
				el: this.scrollbar,
				ignoreBoundaries: false,
				fade: false,
				interactive: true,
				listenX: true,
				listenY: false,
				resize: false
			}
		} );
	},

	render: function( value ) {
		$( this.productBox ).css( 'width', value );
		this.setScroll();
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

	$( this.view.productBox ).children().each( function() {
		width += $( this ).outerWidth( true );
	} );

	this.model.set( 'width', width );
};

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageWidthChange = function( model, value ) {
	this.view.render( value );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
