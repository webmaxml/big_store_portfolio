// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		index: 0,
		state: 'empty'
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	render: function( state ) {

		switch ( state ) {
			case 'full':
				this.$el.addClass( 'rating__star--active' );
				break;
			case 'empty':
				this.$el.removeClass( 'rating__star--active' );
				break;
		};

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
	this.listenTo( this.model, 'change:state', this.manageModelChange );
	this.listenTo( this.mediator, 'setRating', this.manageState );
};

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageModelChange = function( model, state ) {
	this.view.render( state );
};

			/**************************
			 *     Mediator orders    *
			 **************************/

Controller.prototype.manageState = function( index ) {
	
	// setting full and empty stars
	if ( this.model.get( 'index' ) <= index ) {
		this.model.set( 'state', 'full' );
	} else {
		this.model.set( 'state', 'empty' );
	}

};

module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
