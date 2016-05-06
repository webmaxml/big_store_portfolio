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

	events: {
		'mousedown' : 'delegateController',
		'mousemove' : 'delegateController'
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

	render: function() {

		
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
	// this.listenTo( this.model, 'change:width', this.manageModelChange );
	// this.listenTo( this.mediator, 'document:mouseup', this.manageMouseup );
	this.listenTo( this.mediator, 'getScrollbarWidth', this.postWidth );
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
	var width = this.view.el.clientWidth;
	this.model.set( 'width', width );
};


			/**************************
			 *      Model Change      *
			 **************************/

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {

	switch ( event.type ) {
		case 'mousedown':
			break;
		case 'mousemove':
			break;
	};

};

			/**************************
			 *     Mediator events    *
			 **************************/

Controller.prototype.postWidth = function() {
	this.mediator.trigger( 'scrollbarWidth', this.model.get( 'width' ) );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
