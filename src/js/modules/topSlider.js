/**
 * Fires when clicking on the top slider navigation
 *
 * @event module:topSlider#click
 */

/**
 * Top slider on the front page
 *
 * @module topSlider
 * @requires libs/jquery
 * @requires libs/owlCarousel
 */

define(['jquery', 'owlCarousel'], function( $ ) {
	$(function() {
		
		/**
		 * Check if element exists, return if not
		 *
		 * @type {(element|undefined)}
		 * @memberof module:topSlider~
		 */

		var topSlider = document.getElementsByClassName( 'top-slider' )[0];
		if ( !topSlider ) { return; }

		/**
		 * Top slider container
		 *
		 * @type {jquery}
		 * @memberof module:topSlider~
		 */
		
		var $topSlider = $( topSlider );

		/**
		 * Top slider wrap
		 *
		 * @type {jquery}
		 * @memberof module:topSlider~
		 */

		var $topSliderWrap = $( document.getElementsByClassName( 'main__top-slider-wrap' )[0] );

		$topSlider.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'fadeUp'
		});

		$topSliderWrap.on( 'click', '.top-slider__btn-prev, .top-slider__btn-next', topSliderMove );

		/**
		 * Triggers owl-carousel moving events and moves slider
		 *
		 * @param {clickEvent} event Click event object
		 * @listens module:topSlider#click
		 * @memberof module:topSlider~
		 */

		function topSliderMove( event ) {
			var target = event.target;
			var isPrev = target.classList.contains( 'top-slider__btn-prev' ) || 
						 target.parentElement.classList.contains( 'top-slider__btn-prev' );
			var isNext = target.classList.contains( 'top-slider__btn-next' ) || 
						 target.parentElement.classList.contains( 'top-slider__btn-next' );

			if ( isPrev ) { $topSlider.trigger( 'owl.prev' ); }
			if ( isNext ) { $topSlider.trigger( 'owl.next' ); }
		};
	});
});