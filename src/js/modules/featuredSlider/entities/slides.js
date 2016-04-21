// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var mediator = require( '../mediator.js' );
var slideTemplate = require( '../templates/item.jade' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		imgSrcThumb: '',
		imgAlt: '',
		header: '',
		currentPrice: '',
		oldPrice: ''
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	tagName: 'li',

	className: 'featured__item',

	render: function() {
		this.$el.html( slideTemplate( this.model.attributes ) );
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

};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
