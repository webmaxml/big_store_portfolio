define( function( require ) {

	// import libs
	var $ = require( 'jquery' );
	// import entities
	var Thumbs = require( 'entities/productThumbs' );
	var Image = require( 'entities/productImage' );
	
	// var thumbsContainers = document.getElementsByClassName( 'product__thumbwrap' );
	var imageContainer = document.getElementsByClassName( 'product__imgwrap' )[0];

	function init( thumbsContainers ) {

		var thumbCollection = new Thumbs.Collection();

		// create a model and a view for every thumb 
		$( thumbsContainers ).each( function() {
			var src = $( this ).find( 'img' ).attr( 'src' );

			var model = thumbCollection.add({ imgSrc: src });
			var thumb = new Thumbs.View({ el: this, model: model });

		} );

		// create model and a view for main image
		var imageModel = new Image.Model();
		var imageView = new Image.View({ el: imageContainer, model: imageModel });

		// make the first thumb active
		thumbCollection.at(0).set( 'state', 'active' );

	};

	return { init: init };

});