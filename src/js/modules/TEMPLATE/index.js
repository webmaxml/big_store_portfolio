// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Item = require( './entities/item' );

function init( elements ) {

	// create set for every element
	$( elements ).each( function() {
		console.log( 'good' );
	} );

};

module.exports = { init: init };
