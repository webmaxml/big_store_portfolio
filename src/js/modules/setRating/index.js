function init( ratingContainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var Radio = require( './entities/radio' );
	var Mediator = require( './mediator' );

	$( ratingContainers ).each( function() {

		var mediator = new Mediator();

		// rating initial value is set in the data-value
		var initialValue = $( this ).data( 'value' );
		var initialRadio;

		$( this ).children().each( function() {

			var radio = this.querySelector( '[data-entity="radio"]' );
			var star = this.querySelector( '[data-entity="star"]' );

			var radioModel = new Radio.Model({ value: +radio.value });
			var radioView = new Radio.RadioView({ el: radio });
			var starView = new Radio.StarView({ el: star });
			var radioController = new Radio.Controller( mediator, radioModel, radioView, starView );

			// setting initial value
			if ( +radio.value === initialValue ) {
				$( radio ).prop( 'checked', true )
						  .trigger( 'change' );
			};

		} );

	} );
};

module.exports = { init: init };
