define(['jquery', './thumbs', './image'], function( $, Thumbs, Image ) {
	
	var imageContainer = document.getElementsByClassName( 'product__imgwrap' )[0];

	function init( thumbsContainers ) {

		var thumbCollection = new Thumbs.Collection();

		// create set for every thumb 
		$( thumbsContainers ).each( function() {
			var src = $( this ).find( 'img' ).attr( 'src' );

			var model = thumbCollection.add({ imgSrc: src });
			var thumb = new Thumbs.View({ el: this, model: model });
			var controller = new Thumbs.Controller( model, thumb );

		} );

		// create set for main image
		var imageModel = new Image.Model();
		var imageView = new Image.View({ el: imageContainer, model: imageModel });
		var imageController = new Image.Controller( imageModel, imageView );

		// make the first thumb active
		thumbCollection.at(0).set( 'state', 'active' );

	};

	return { init: init };

});