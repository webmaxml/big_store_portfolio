define(['jquery', 'underscore', 'backbone', 'text!./../templates/item.html', './../mediator'], 
function( $, _, Backbone, itemTemplate, mediator ) {

	/******************** Model ********************/

	var Model = Backbone.Model.extend({
		defaults: {
			state: null
		}
	});

	/******************** Collection ********************/

	var Collection = Backbone.Collection.extend({
		model: Model,
	});


	/******************** View ********************/

	var View = Backbone.View.extend({

		template: _.template( itemTemplate ),

		events: {
		 	'click' : 'delegateController'
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

	var Controller = function( model, view ) {
		_.extend( this, Backbone.Events );

		// set the mutual links
		this.model = model;
		this.view = view;
		this.view.controller = this;

		// set event listeners
		this.listenTo( this.model, 'change', this.manageModelChange );

	};

	// manage model change
	Controller.prototype.manageModelChange = function() {
		this.view.render();
	};

	// manage user actions
	Controller.prototype.manageAction = function( event ) {
		if ( event.type === 'click' ) {
			this.updateModel();
		}
	};

	Controller.prototype.updateModel = function() {
		this.model.set( 'state', 'active' );
	};


	return { 
		Model: Model,
		Collection: Collection,
		View: View,
		Controller: Controller
	};

});