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
		$topSliderWrap = $( document.getElementsByClassName( 'main__slider-wrap' )[0] ),
		$topSliderPrev = $( document.getElementsByClassName( 'top-slider__btn-prev' )[0] ),
		$topSliderNext = $( document.getElementsByClassName( 'top-slider__btn-next' )[0] );

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

} );
