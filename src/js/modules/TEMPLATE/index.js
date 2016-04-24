function init( elements ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Item = require( './entities/item' );

	// create set for every element
	$( elements ).each( function() {
		console.log( 'good' );
	} );

};

module.exports = { init: init };
