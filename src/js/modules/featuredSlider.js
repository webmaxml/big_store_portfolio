/**
 * Click event on featured slider navigation 
 *
 * @event module:featuredSlider#click
 */

/**
 * Brand slider in the footer
 *
 * @module featuredSlider
 * @requires libs/jquery
 * @requires libs/owlCarousel
 */

define(['jquery', 'owlCarousel'], function( $ ) {
	$(function() {
		
		/**
		 * Check if element exists, return if not
		 *
		 * @type {(element|undefined)}
		 * @memberof module:featuredSlider~
		 */

		var featuredSlider = document.getElementsByClassName( 'featured__content' )[0];
		if ( !featuredSlider ) { return; }
		
		/**
		 * Featured slider items container
		 *
		 * @type {jquery}
		 * @memberof module:featuredSlider~
		 */

		var $featuredSlider = $( featuredSlider );

		/**
		 * Featured slider container
		 *
		 * @type {jquery}
		 * @memberof module:featuredSlider~
		 */

		var $featured = $( document.getElementsByClassName( 'featured' )[0] );

		$featuredSlider.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'backSlide'
		});

		$featured.on( 'click', '.featured__btn-prev, .featured__btn-next', featureSliderMove );

		/**
		 * Triggers owl-carousel moving events and moves slider
		 *
		 * @param {clickEvent} event Event click object
		 * @listens module:featuredSlider#click
		 * @memberof module:featuredSlider~
		 */

		function featureSliderMove( event ) {
			var target = event.target;
			var isPrev = target.classList.contains( 'featured__btn-prev' ) || target.parentElement.classList.contains( 'featured__btn-prev' );
			var isNext = target.classList.contains( 'featured__btn-next' ) || target.parentElement.classList.contains( 'featured__btn-next' );

			if ( isPrev ) { $featuredSlider.trigger( 'owl.prev' ); }
			if ( isNext ) { $featuredSlider.trigger( 'owl.next' ); }
		};
	});
});