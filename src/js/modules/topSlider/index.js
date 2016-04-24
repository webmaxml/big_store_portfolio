function init( sliderContainers ) {

	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Slider = require( './entities/slider' );
	var Buttons = require( './entities/buttons' );

	$( sliderContainers ).each( function() {

		// creating slider
		var sliderView = new Slider.View({ el: this });
		var sliderController = new Slider.Controller( null, sliderView );

		sliderView.render();

		// creating buttons
		var prevButton = document.getElementsByClassName( 'top-slider__btn-prev' );
		var nextButton = document.getElementsByClassName( 'top-slider__btn-next' );

		var prevModel = new Buttons.Model({ type: 'prev' });
		var prevView = new Buttons.View({ el: prevButton, model: prevModel });
		var prevController = new Buttons.Controller( prevModel, prevView );

		var nextModel = new Buttons.Model({ type: 'next' });
		var nextView = new Buttons.View({ el: nextButton, model: nextModel });
		var nextController = new Buttons.Controller( nextModel, nextView );
		
	} );
};

module.exports = { init: init };
