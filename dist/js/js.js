jQuery( function( $ ) {

	// shopping cart
	var   $shoppingCart = $( document.getElementsByClassName( 'shopping-cart' )[0] ),
		$shoppingBasket = $( document.getElementsByClassName( 'shopping-cart__basket' )[0] ),
		$shoppingToggle = $( document.getElementsByClassName( 'shopping-cart__toggle' )[0] );
		
	$shoppingCart.on( 'click', '.shopping-cart__toggle', basketToggle );

	function basketToggle() {
		$shoppingBasket.slideToggle({
			duration: 150,
			complete: function() {
				$shoppingToggle.toggleClass( 'shopping-cart__toggle--open' );
			}
		});
	};


	// mobile-menu
	var       $header = $( document.getElementsByClassName( 'header' )[0] ),
		  $mobileMenu = $( document.getElementsByClassName( 'header__mobile-menu' )[0] ),
		$mobileToggle = $( document.getElementsByClassName( 'header__mobile-toggle' )[0] );

	$header.on( 'click', '.header__mobile-toggle', menuToggle );

	function menuToggle() {
		$mobileMenu.fadeToggle({
			duration: 200,
			complete: function() {
				$mobileToggle.toggleClass( 'header__mobile-toggle--open' );
			}
		})
	};

	// $( window ).on( 'resize', onResize );

	// function onResize( event ) {
	// 	if ( this.innerWidth > 700 ) { return; }
	// 	console.log( this.innerWidth );
	// };

	// top slider
	var     $topSlider = $( document.getElementsByClassName( 'top-slider' )[0] ),
		$topSliderWrap = $( document.getElementsByClassName( 'main__slider-wrap' )[0] );

	$topSlider.owlCarousel({
		singleItem: true,
		pagination: false,
		mouseDrag: false,
		transitionStyle: 'fadeUp'
	});

	$topSliderWrap.on( 'click', '.top-slider__btn-prev, .top-slider__btn-next', topSliderMove );

	function topSliderMove( event ) {
		var target = event.target;
		var isPrev = target.classList.contains( 'top-slider__btn-prev' );
		var isNext = target.classList.contains( 'top-slider__btn-next' );

		if ( isPrev ) { $topSlider.trigger( 'owl.prev' ); }
		if ( isNext ) { $topSlider.trigger( 'owl.next' ); }
	};

	// featured slider
	var $featuredSlider = $( document.getElementsByClassName( 'featured__content' )[0] ),
		      $featured = $( document.getElementsByClassName( 'featured' )[0] );

	$featuredSlider.owlCarousel({
		singleItem: true,
		pagination: false,
		mouseDrag: false,
		transitionStyle: 'backSlide'
	});

	$featured.on( 'click', '.featured__btn-prev, .featured__btn-next', featureSliderMove );

	function featureSliderMove( event ) {
		var target = event.target;
		var isPrev = target.classList.contains( 'featured__btn-prev' );
		var isNext = target.classList.contains( 'featured__btn-next' );

		if ( isPrev ) { $featuredSlider.trigger( 'owl.prev' ); }
		if ( isNext ) { $featuredSlider.trigger( 'owl.next' ); }
	};

} );
