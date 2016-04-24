function init( currencies ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Currency = require( './entities/currency' );
	var mediator = require( './mediator.js' );

	// create set for every currency element
	$( currencies ).each( function() {
		var currModel = new Currency.Model();
		var currView = new Currency.View({ el: this, model: currModel });
		var currControler = new Currency.Controller( currModel, currView );
	} );

	// set initial currency
	mediator.setCurrency( 'dollar' );

};

module.exports = { init: init };
