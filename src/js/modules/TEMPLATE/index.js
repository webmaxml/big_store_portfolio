function init( elements ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Item = require( './entities/item' );
	var Mediator = require( './mediator' );
	var AjaxManager = require( './ajaxManager' );

	// create set for every element
	$( elements ).each( function() {
		var mediator = new Mediator();
		var ajaxManager = new AjaxManager( mediator );
		
		console.log( 'good' );
	} );

};

module.exports = { init: init };
