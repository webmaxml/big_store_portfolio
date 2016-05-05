// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

var imgTemplate = require( '../templates/image.jade' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		imgSrcFull: '',
		imgSrc: '',
		imgAlt: ''
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	render: function( value ) {
		this.$el.html( imgTemplate( this.model.attributes ) );
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
	this.listenTo( this.model, 'change:imgSrc', this.manageModelChange );
	this.listenTo( this.mediator, 'setImage', this.updateModel );

};

// manage model change
Controller.prototype.manageModelChange = function( model, value ) {
	this.view.render( value );
};

Controller.prototype.updateModel = function( attrs ) {
	this.model.set( attrs );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
