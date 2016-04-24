function init( thumbsContainers ) {

	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Backbone = require( 'backbone' );

	var Thumbs = require( './entities/thumbs' );
	var Image = require( './entities/image' );

	var initialActive;

	// create set for every thumb 
	$( thumbsContainers ).each( function( index ) {

		var $img = $( this ).find( 'img' ),
			src = $img.attr( 'src' );
			srcFull = $img.data( 'srcfull' );
			alt = $img.attr( 'alt' );

		var model = new Thumbs.Model({ 
			index: index,
			imgSrc: src,
			imgSrcFull: srcFull,
			imgAlt: alt
		});

		// set initial active model
		if ( model.get( 'index' ) === 0 ) { 
			initialActive = model; 
		};

		var thumb = new Thumbs.View({ el: this, model: model });
		var controller = new Thumbs.Controller( model, thumb );

	} );

	// create set for main image
	var imageContainer = document.getElementsByClassName( 'product__imgwrap' );

	var imageModel = new Image.Model();
	var imageView = new Image.View({ el: imageContainer, model: imageModel });
	var imageController = new Image.Controller( imageModel, imageView );

	// make initial active
	initialActive.set( 'state', 'active' );
};

module.exports = { init: init };