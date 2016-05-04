// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var owlCarousel = require( 'owlCarousel' );

/******************** View ********************/

var View = Backbone.View.extend({

	render: function() {
		this.$el.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'fadeUp'
		});

		return this;
	},

	prev: function() {
		this.$el.trigger( 'owl.prev' );
	},

	next: function() {
		this.$el.trigger( 'owl.next' );
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
	this.listenTo( this.mediator, 'slideChange', this.manageSlideChange );
};

// manage model change
Controller.prototype.manageSlideChange = function( type ) {
	switch ( type ) {
		case 'prev':
			this.view.prev();
			break;
		case 'next':
			this.view.next();
			break;
	};
};


module.exports = { 
	View: View,
	Controller: Controller
};