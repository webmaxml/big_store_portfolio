define(['jquery', 'owlCarousel'], function( $ ) {
	$(function() {
		// if exists
		var featuredSlider = document.getElementsByClassName( 'featured__content' )[0];
		if ( !featuredSlider ) { return; }
		
		var $featuredSlider = $( featuredSlider );
		var $featured = $( document.getElementsByClassName( 'featured' )[0] );

		$featuredSlider.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'backSlide'
		});

		$featured.on( 'click', '.featured__btn-prev, .featured__btn-next', featureSliderMove );

		function featureSliderMove( event ) {
			var target = event.target;
			var isPrev = target.classList.contains( 'featured__btn-prev' ) || target.parentElement.classList.contains( 'featured__btn-prev' );
			var isNext = target.classList.contains( 'featured__btn-next' ) || target.parentElement.classList.contains( 'featured__btn-next' );

			if ( isPrev ) { $featuredSlider.trigger( 'owl.prev' ); }
			if ( isNext ) { $featuredSlider.trigger( 'owl.next' ); }
		};
	});
});