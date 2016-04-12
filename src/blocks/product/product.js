define(['jquery', 'underscore' , 'backbone', 'ui/effect', 'effect/effect-fade'], function( $, _, Backbone ) {

	/******************** Templates ********************/

	var imgTemplate = '<a class="product__img-link" href="<%= src %>">' + 
					  	'<img class="product__img" src="<%= src %>">' +
					  '</a>';

	/******************** Mediator ********************/

	var mediator = {};
	_.extend( mediator, Backbone.Events );

	/******************** Models ********************/

	var Image = Backbone.Model.extend({
		defaults: {
			imgSrc: null
		}
	});

	var Thumb = Backbone.Model.extend({
		defaults: {
			state: null,
			imgSrc: null
		},

		initialize: function() {
			this.on( 'change:state', this.stateNotification );
		},

		stateNotification: function( model, state, options ) {
			this.trigger( 'stateChange', model, state );
		},
	});

	/******************** Collections ********************/

	var ThumbCollection = Backbone.Collection.extend({
		model: Thumb,

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.on( 'stateChange', this.manageState );
		},

		/***************************
		 *     STATE MANAGING      *
		 ***************************/

		manageState: function( model, state ) {
			if ( state === 'active' ) {
				this.setOnlyState( model );
			}
		},

		/***************************
		 *		   HELPERS         *
		 ***************************/

		// make sure there is only one model with this state
		setOnlyState: function( model, state ) {
			if ( state ) {
				model.set( 'state', state );
			};

			var restModels = this.without( model );

			_.each( restModels, function( model ) {
				model.set( 'state', null );
			} );
		},
	});

	/******************** Views ********************/

	var ThumbBox = Backbone.View.extend({
		el: document.getElementsByClassName( 'product__thumbbox' )[0],

		initialize: function() {
			var collection = this.collection;
			this.$el.children().each( function() {
				var src = $( this ).find( 'img' ).attr( 'src' );

				// create a model and a view for every thumb 
				var model = collection.add({ imgSrc: src });
				var thumb = new ThumbView({ el: this, model: model });

			} );
		}
	});

	var ThumbView = Backbone.View.extend({

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.listenTo( this.model, 'change:state', this.manageView );
		},

		manageView: function( model, state ) {
			if ( state === 'active' ) {
				mediator.trigger( 'activeChange', this.model.get( 'imgSrc' ) );
			}
			this.render( state );
		},

		render: function( state ) {
			if ( state === 'active' ) {
				this.$el.addClass( 'product__thumbwrap--active' );
			} else {
				this.$el.removeClass( 'product__thumbwrap--active' );
			};

			return this;
		},

		/***************************
		 *		 CONTROLLER        *
		 ***************************/

		 events: {
		 	'click' : 'updateModel'
		 },

		 updateModel: function() {
		 	this.model.set( 'state', 'active' );
		 },
	});

	var ImageView = Backbone.View.extend({
		el: document.getElementsByClassName( 'product__imgbox' )[0],

		initialize: function() {
			this.setEventListeners();
		},

		setEventListeners: function() {
			this.listenTo( this.model, 'change:imgSrc', this.render );

			// thumb view will trigger the 'activeChange' event in mediator
			this.listenTo( mediator, 'activeChange', this.updateModel );
		},

		template: _.template( imgTemplate ),

		render: function( model, value ) {
			this.$el.html( this.template({ src: value }) );
			return this;
		},

		/***************************
		 *		 CONTROLLER        *
		 ***************************/

		updateModel: function( src ) {
			this.model.set( 'imgSrc', src );
		}

	});

	/******************** Constructor ********************/

	var ProductConstructor = function() {
		this.thumbCollection = new ThumbCollection();
		this.thumbBox = new ThumbBox({ collection: this.thumbCollection });

		this.imageModel = new Image();
		this.imageView = new ImageView({ model: this.imageModel });

		// make 1 thumb active
		this.thumbCollection.at(0).set( 'state', 'active' );
	};

	return ProductConstructor;
});