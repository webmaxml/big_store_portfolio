function init( ratingContainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Star = require( './entities/star' );
	var mediator = require( './mediator' );
	var ajaxManager = require( './ajaxManager' );

	$( ratingContainers ).each( function() {

		var activeIndex;
		
		$( this ).children().each( function( index ) {

			if ( $( this ).data( 'active' ) ) {
				activeIndex = index;
			};

			var starModel = new Star.Model({ index: index });
			var starView = new Star.View({ el: this });
			var starController = new Star.Controller( starModel, starView );

		} );

		mediator.setRating( activeIndex + 1 );

	} );
};

module.exports = { init: init };
