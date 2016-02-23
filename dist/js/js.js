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


} );
