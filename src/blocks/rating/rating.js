define(['jquery'], function( $ ) {
	$(function() {

		var rating = document.getElementsByClassName('rating')[0];
		if ( !rating ) { return; }

		var $rating = $( rating );
		var $stars = $rating.find( '.rating__star' );
		var currentValue = 4;
		
		setValue( currentValue );

		$rating.on( 'mouseenter', '.rating__star', starOn );
		$rating.on( 'mouseleave', '.rating__star', starOff );
		$rating.on( 'click', '.rating__star', starClick );

		function starOn( event ) {
			var value = $( event.target ).data( 'index' );
			var $starsToOn = $stars.slice( 0, value );

			resetValue();

			$starsToOn.addClass( 'rating__star--active' );
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

			$starsCurrent.addClass( 'rating__star--active' );
		};

		function resetValue() {
			$stars.removeClass( 'rating__star--active' );
		};


	});
});