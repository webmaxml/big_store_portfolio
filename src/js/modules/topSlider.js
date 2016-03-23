define(['jquery', 'owlCarousel'], function( $ ) {
	$(function() {
		// if exists
		var topSlider = document.getElementsByClassName( 'top-slider' )[0];
		if ( !topSlider ) { return; }
		
		var $topSlider = $( topSlider );
		var $topSliderWrap = $( document.getElementsByClassName( 'main__top-slider-wrap' )[0] );

		$topSlider.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'fadeUp'
		});

		$topSliderWrap.on( 'click', '.top-slider__btn-prev, .top-slider__btn-next', topSliderMove );

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