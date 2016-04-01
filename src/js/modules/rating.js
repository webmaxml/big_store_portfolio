define(['jquery'], function( $ ) {
	$(function() {

		var rating = document.getElementsByClassName('product__rating')[0];
		if ( !rating ) { return; }

		var $rating = $( rating );
		var $stars = $rating.find( '.product__rating-star' );
		var currentValue = 4;
		
		setValue( currentValue );

		$rating.on( 'mouseenter', '.product__rating-star', starOn );
		$rating.on( 'mouseleave', '.product__rating-star', starOff );
		$rating.on( 'click', '.product__rating-star', starClick );

		function starOn( event ) {
			var value = $( event.target ).data( 'index' );
			var $starsToOn = $stars.slice( 0, value );

			resetValue();

			$starsToOn.addClass( 'product__rating-star--full' );
		};

		function starOff() {
			resetValue();
			setValue( currentValue );
		};

		function starClick( event ) {
			var value = $( event.target ).data( 'index' );

			currentValue = value;
			setValue( currentValue );
		};

		function setValue( value ) {
			var $starsCurrent = $stars.slice( 0, value );

			$starsCurrent.addClass( 'product__rating-star--full' );
		};

		function resetValue() {
			$stars.removeClass( 'product__rating-star--full' );
		};


	});
});