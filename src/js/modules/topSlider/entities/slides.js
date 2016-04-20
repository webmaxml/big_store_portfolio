// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );
var mediator = require( '../mediator.js' );
var sliderTemplate = require( '../templates/sliderItem.jade' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		imgSrc: '',
		imgAlt: '',
		header: '',
		text: ''
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	className: 'top-slider__item',

	render: function() {

		this.$el.html( sliderTemplate( this.model.attributes ) );

		return this;
	},

});


module.exports = { 
	Model: Model,
	View: View
};