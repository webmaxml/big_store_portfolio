function init( currencies ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Currency = require( './entities/currency' );
	var Mediator = require( './mediator.js' );

	var mediator = new Mediator();
	var currModel = new Currency.Model();

	// create set for every currency
	$( currencies ).each( function() {
		var currView = new Currency.View({ el: this });
		var currControler = new Currency.Controller( mediator, currModel, currView );
	} );

	// set initial currency
	mediator.setCurrency( 'euro' );

};

module.exports = { init: init };
