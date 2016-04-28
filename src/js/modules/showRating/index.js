function init( ratingContainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Star = require( './entities/star' );
	var Mediator = require( './mediator' );

	// create set for every container
	$( ratingContainers ).each( function() {
		var mediator = new Mediator();

		$( this ).children().each( function( index ) {
			var starModel = new Star.Model({ index: index });
			var starView = new Star.View({ el: this });
			var starController = new Star.Controller( mediator, starModel, starView );
		} )
		
		var initialRating = $( this ).data( 'value' );
		mediator.setRating( initialRating );
	} );

};

module.exports = { init: init };
