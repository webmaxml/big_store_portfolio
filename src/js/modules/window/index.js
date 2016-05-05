function init() {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Window = require( './entities/window' );
	var Mediator = require( './mediator' );

	var mediator = new Mediator();

	var windowView = new Window.View({ el: window });
	var windowController = new Window.Controller( mediator, null, windowView );
};

module.exports = { init: init };
