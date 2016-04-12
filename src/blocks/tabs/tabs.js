define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone ) {

	/******************** Models ********************/

	var Model = Backbone.Model.extend({
		defaults: {
			index: null,
			isActive: false
		}, 

		initialize: function() {
			this.on( 'change:isActive', this.changeTab );
		},

		changeTab: function( model, value, options ) {
			// special event for collection to manage active tabs
			// fires only when setting an active tab
			if ( value ) {
				this.trigger( 'changeActiveTab', model );
			}
		}
	});

	/******************** Collections ********************/

	var Collection = Backbone.Collection.extend({
		model: Model,
		comparator: 'index',

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.on( 'changeActiveTab', this.manageTabs );
		},

		// if active tab is set, all other tabs become unactive
		manageTabs: function( activeModel ) {
			var activeTabs = this.where({ isActive: true });

			_.each( activeTabs, function( model ) {
				if ( !( model === activeModel ) ) {
					model.set( 'isActive', false );
				}
			} );
		}
	});

	/******************** Views ********************/

	var Tabs = Backbone.View.extend({
		el: document.getElementsByClassName( 'tabs' )[0],

		initialize: function() {

			var collection = this.collection

			this.$el.children().each( function( i ) {

				// create a model and a view for every tab item
				var model = collection.add({ index: i });
				var tabsItem = new TabsItem({ el: this, model: model });

			} );
		}

	});

	var TabsItem = Backbone.View.extend({

		setEventListeners: function() {
			this.listenTo( this.model, 'change:isActive', this.render );
		},

		initialize: function( options ) {
			this.setEventListeners();
		},

		events: {
			'click': 'updateModel'
		},

		updateModel: function() {
			// update model if clicked on unactive tab
			if ( !this.isActive() ) {
				this.model.set( 'isActive', true );
			}
		},

		// check if this tab is active
		isActive: function() {
			return this.model.get( 'isActive' );
		},

		render: function( model, active ) {
			if ( active ) {
				this.$el.addClass( 'tabs__item--active' );
			} else {
				this.$el.removeClass( 'tabs__item--active' );
			}

			return this;
		}

	});

	var Panes = Backbone.View.extend({
		el: document.getElementsByClassName( 'product-desc__pane-box' )[0],

		initialize: function() {

			var collection = this.collection

			this.$el.children().each( function( i ) {

				// create a view for every pane item and attach an existing model to it
				var panesItem = new PanesItem({ el: this, model: collection.at( i ) });

			} );
		}

	});

	var PanesItem = Backbone.View.extend({

		setEventListeners: function() {
			this.listenTo( this.model, 'change:isActive', this.render );
		},

		initialize: function( options ) {
			this.setEventListeners();
		},

		// check if this pane is active
		isActive: function() {
			return this.model.get( 'isActive' );
		},

		render: function( model, active ) {
			if ( active ) {
				this.$el.addClass( 'product-desc__pane--active' );
			} else {
				this.$el.removeClass( 'product-desc__pane--active' );
			}

			return this;
		}

	});

	/******************** Constructor ********************/

	var TabsConstructor = function() {
		this.collection = new Collection();
		this.tabs = new Tabs({ collection: this.collection });
		this.panes = new Panes({ collection: this.collection });

		// make the first tab active
		this.collection.at( 0 ).set( 'isActive', true );
	};

	return TabsConstructor;

});



