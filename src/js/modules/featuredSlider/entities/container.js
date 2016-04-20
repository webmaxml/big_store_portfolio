define(['jquery', 'underscore', 'backbone', './../mediator'], 
function( $, _, Backbone, mediator ) {

	/******************** Model ********************/

	var Model = Backbone.Model.extend({

	});

	/******************** Collection ********************/

	var Collection = Backbone.Collection.extend({
		model: Model,
	});


	/******************** View ********************/

	var View = Backbone.View.extend({

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

	};



	return { 
		Model: Model,
		Collection: Collection,
		View: View,
		Controller: Controller
	};

});