function init( elements ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Item = require( './entities/item' );
	var mediator = require( './mediator' );
	var ajaxManager = require( './ajaxManager' );

	// create set for every element
	$( elements ).each( function() {
		console.log( 'good' );
	} );

};

module.exports = { init: init };
