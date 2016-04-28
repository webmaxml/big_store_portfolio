// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Backbone = require( 'backbone' );


/******************** Model ********************/

var Model = Backbone.Model.extend({
	defaults: {
		value: 0,
		state: 'empty'
	}
});

/******************** View ********************/

var RadioView = Backbone.View.extend({

	events: {
		'change' : 'delegateController',
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

});

var StarView = Backbone.View.extend({

	events: {
		'mouseenter': 'delegateController',
		'mouseleave': 'delegateController'
	},

	// delegate managing user actions to controller
	delegateController: function( event ) {
		this.controller.manageAction( event );
	},

	render: function( state ) {

		switch ( state ) {
			case 'active':
				this.$el.addClass( 'rating__star--active' );
				break;
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

var Controller = function( mediator, model, radioView, starView ) {
	_.extend( this, Backbone.Events );

	// set the mutual links
	this.mediator = mediator;
	this.model = model;
	this.radioView = radioView;
	this.starView = starView;
	this.radioView.controller = this;
	this.starView.controller = this;

	// set event listeners
	this.listenTo( this.model, 'change:state', this.manageStateChange );
	this.listenTo( this.mediator, 'manageActiveChange', this.manageActive );
};

			/**************************
			 *      Model Change      *
			 **************************/

Controller.prototype.manageStateChange = function( model, state ) {
	this.starView.render( state );
};

			/**************************
			 *       User input       *
			 **************************/

Controller.prototype.manageAction = function( event ) {
	switch ( event.type ) {
		case 'change':
			this.mediator.trigger( 'activeChange', this.model.get( 'value' ) );
			break;
		case 'mouseenter':
			this.mediator.trigger( 'hover', this.model.get( 'value' ) );
			break;
		case 'mouseleave':
			this.mediator.trigger( 'unhover', this.model.get( 'value' ) );
			break;
	};
};

			/**************************
			 *     Mediator orders    *
			 **************************/

Controller.prototype.manageActive = function( value ) {

	var thisValue = this.model.get( 'value' );

	// make every radio behind full, every after - inactive, equal - active
	if ( thisValue < value ) {
		this.model.set( 'state', 'full' );
	};

	if ( thisValue === value ) {
		this.model.set( 'state', 'active' );
	};

	if ( thisValue > value ) {
		this.model.set( 'state', 'empty' );
	};

};

module.exports = { 
	Model: Model,
	RadioView: RadioView,
	StarView: StarView,
	Controller: Controller
};
