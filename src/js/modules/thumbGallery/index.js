function init( thumbGalleries ) {

	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Backbone = require( 'backbone' );

	var Thumbs = require( './entities/thumbs' );
	var Image = require( './entities/image' );
	var Mediator = require( './mediator' );

	$( thumbGalleries ).each( function() {

		var mediator = new Mediator();

		var image = this.querySelector( '[data-entity="image"]' );
		var thumbs = this.querySelectorAll( '[data-entity="thumb"]' );

		$( thumbs ).each( function( index ) {

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

			var thumb = new Thumbs.View({ el: this });
			var controller = new Thumbs.Controller( mediator, model, thumb );

		} );

		var imageModel = new Image.Model();
		var imageView = new Image.View({ el: image, model: imageModel });
		var imageController = new Image.Controller( mediator, imageModel, imageView );

		// set initial active
		mediator.setActive(1);

	} );

};

module.exports = { init: init };