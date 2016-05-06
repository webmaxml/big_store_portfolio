// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );

/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		scrollbarWidth: 0,
		handleWidth: 0,
		handleState: 'inactive'
	}
});

/******************** View ********************/

var View = Backbone.View.extend({

	initialize: function() {
		this.$handle = this.$el.children().first();
	},

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
	this.listenTo( this.mediator, 'document:mouseup', this.manageMouseup );
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
	var scrollbarWidth = this.view.el.clientWidth;
	var handleWidth = this.view.$el.outerWidth();

	this.model.set( 'scrollbarWidth', scrollbarWidth );
	this.model.set( 'handleWidth', handleWidth );
};

Controller.prototype.moveHandle = function( event ) {
	console.log( event );
};


			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageModelChange = function( model, value ) {
	this.mediator.trigger( 'scrollbarWidth:change', value );
};

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {

	switch ( event.type ) {
		case 'mousedown':
			this.model.set( 'handleState', 'active' );
			break;
		case 'mousemove':
			if ( this.model.get( 'handleState' ) === 'active' ) {
				this.moveHandle( event );
			};
			break;
	};

};

			/**************************
			 *     Mediator events    *
			 **************************/

Controller.prototype.manageMouseup = function( event ) {
	this.model.set( 'handleState', 'inactive' );
};


module.exports = { 
	Model: Model,
	View: View,
	Controller: Controller
};
