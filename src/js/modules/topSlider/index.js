function init( sliderContainers ) {

	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Slider = require( './entities/slider' );
	var Buttons = require( './entities/buttons' );
	var Mediator = require( './mediator' );

	$( sliderContainers ).each( function() {

		var mediator = new Mediator();

		var slider = this.querySelector( '[data-entity="slider"]' );
		var buttons = this.querySelectorAll( '[data-entity="button"]' );

		// create slider
		var sliderView = new Slider.View({ el: slider });
		var sliderController = new Slider.Controller( mediator, null, sliderView );
		sliderView.render();

		_.each( buttons, function( button ) {

			var type = $( button ).data( 'type' );

			var btnModel = new Buttons.Model({ type: type });
			var btnView = new Buttons.View({ el: button });
			var btnController = new Buttons.Controller( mediator, btnModel, btnView );

		} );
		
	} );
};

module.exports = { init: init };
