/******************** Import ********************/

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

/******************** Collection ********************/

var Collection = Backbone.Collection.extend({
	model: Model,
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
	Collection: Collection,
	View: View
};