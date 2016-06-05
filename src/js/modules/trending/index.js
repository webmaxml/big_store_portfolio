function init( containers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var NavItem = require( './entities/navItem' );
	var Grid = require( './entities/grid' );
	var Mediator = require( './mediator' );

	// create set for every element
	$( containers ).each( function() {
		var mediator = new Mediator();
		
		console.log( 'good' );
	} );

};

module.exports = { init: init };
