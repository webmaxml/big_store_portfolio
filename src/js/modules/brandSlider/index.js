function init( brandСontainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Slider = require( './entities/slider' );
	var Buttons = require( './entities/buttons' );

	$( brandСontainers ).each( function() {

		// create slider
		var sliderView = new Slider.View({ el: this });
		var sliderController = new Slider.Controller( null, sliderView );
		sliderView.render();

		// create buttons
		var prevButton = document.getElementsByClassName( 'brand-slider__btn-prev' )[0];
		var nextButton = document.getElementsByClassName( 'brand-slider__btn-next' )[0];

		var prevModel = new Buttons.Model({ type: 'prev' });
		var prevView = new Buttons.View({ el: prevButton });
		var prevController = new Buttons.Controller( prevModel, prevView );

		var nextModel = new Buttons.Model({ type: 'next' });
		var nextView = new Buttons.View({ el: nextButton });
		var nextController = new Buttons.Controller( nextModel, nextView );

	} );
};

module.exports = { init: init };
