function init( productContainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Container = require( './entities/container' );
	var Mediator = require( './mediator' );

	$( productContainers ).each( function() {

		var mediator = new Mediator();

		var containerModel = new Container.Model();
		var containerView = new Container.View({ el: this });
		var containerController = new Container.Controller( mediator, containerModel, containerView );

		containerController.init();

	} );

};

module.exports = { init: init };
