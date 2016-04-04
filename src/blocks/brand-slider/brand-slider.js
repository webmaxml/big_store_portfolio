/**
 * Click event on brand slider navigation 
 *
 * @event module:brandSlider#click
 */

/**
 * Brand slider in the footer
 *
 * @module brandSlider
 * @requires libs/jquery
 * @requires libs/owlCarousel
 */

define(['jquery', 'owlCarousel'], function( $ ) {
	$(function() {

		/**
		 * Brand slider container
		 *
		 * @type {jquery}
		 * @memberof module:brandSlider~
		 */

		var $brandSlider = $( document.getElementsByClassName( 'brand-slider' )[0] );

		/**
		 * Brand slider wrap
		 *
		 * @type {jquery}
		 * @memberof module:brandSlider~
		 */

		var $brandSliderWrap = $( document.getElementsByClassName( 'footer__brand-slider-wrap' )[0] );

		$brandSlider.owlCarousel({
			itemsCustom: [ [0, 1], [540, 2], [780, 3], [1150, 4] ],
			pagination: false,
		});

		$brandSliderWrap.on( 'click', '.brand-slider__btn-prev, .brand-slider__btn-next', brandSliderMove );

		/**
		 * Triggers owl-carousel moving events and moves slider
		 *
		 * @param {clickEvent} event Click event object
		 * @listens module:brandSlider#click
		 * @memberof module:brandSlider~
		 */

		function brandSliderMove( event ) {

			var target = event.target;
			var isPrev = target.classList.contains( 'brand-slider__btn-prev' ) || target.parentElement.classList.contains( 'brand-slider__btn-prev' );
			var isNext = target.classList.contains( 'brand-slider__btn-next' ) || target.parentElement.classList.contains( 'brand-slider__btn-next' );

			if ( isPrev ) { $brandSlider.trigger( 'owl.prev' ); }
			if ( isNext ) { $brandSlider.trigger( 'owl.next' ); }
		};
	});
});