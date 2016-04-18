define(['jquery', './currency'], function( $, Currency ) {
	
	var init = function( currencies ) {

		var currencyCollection = new Currency.Collection();
		
		// create set for every currency element
		$( currencies ).each( function() {

			var model = currencyCollection.add({});
			var view = new Currency.View({ el: this, model: model });
			var controller = new Currency.Controller( model, view );

		} );

		currencyCollection.setCurrency( 'dollar' );
	};

	return { init: init };

});