jQuery( function( $ ) {

	// shopping cart
	var $shoppingCart = $( document.getElementsByClassName( 'shopping-cart' )[0] );
	var $shoppingBasket = $( document.getElementsByClassName( 'shopping-cart__basket' )[0] );
	var $shoppingToggle = $( document.getElementsByClassName( 'shopping-cart__toggle' )[0] );

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
	var $header = $( document.getElementsByClassName( 'header' )[0] );
	var $mobileMenu = $( document.getElementsByClassName( 'header__mobile-menu' )[0] );
	var $mobileToggle = $( document.getElementsByClassName( 'header__mobile-toggle' )[0] );

	$header.on( 'click', '.header__mobile-toggle', menuToggle );

	function menuToggle() {
		$mobileMenu.fadeToggle({
			duration: 200,
			complete: function() {
				$mobileToggle.toggleClass( 'header__mobile-toggle--open' );
			}
		})
	};

	
	// top slider
	var $topSlider = $( document.getElementsByClassName( 'top-slider' )[0] );
	var $topSliderWrap = $( document.getElementsByClassName( 'main__slider-wrap' )[0] );

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
	var $featuredSlider = $( document.getElementsByClassName( 'featured__content' )[0] );
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
		var isPrev = target.classList.contains( 'featured__btn-prev' );
		var isNext = target.classList.contains( 'featured__btn-next' );

		if ( isPrev ) { $featuredSlider.trigger( 'owl.prev' ); }
		if ( isNext ) { $featuredSlider.trigger( 'owl.next' ); }
	};

	// new-products scrollbar

	var $itemViewport = $( document.getElementsByClassName( 'new-products__content' )[0] );
	var $itemBox = $( document.getElementsByClassName( 'new-products__item-box' )[0] );
	var $scrollbar = $( document.getElementsByClassName( 'new-products__scrollbar' )[0] );

	var itemCount = $itemBox.children().length;
	var itemLength = 256;
	var itemMargin = 24;

	var itemBoxWidth = itemCount * ( itemLength + itemMargin ) - itemMargin;
	var itemViewportWidth = $itemViewport.width();

	var itemBoxMaxOffset = itemBoxWidth - itemViewportWidth;

	$itemBox.css( 'width', itemBoxWidth );

	$scrollbar.slider({
		slide: itemBoxSlide,
	});

	function itemBoxSlide( event, obj ) {
		$itemBox.css({
			'marginLeft': ( -obj.value / 100 ) * itemBoxMaxOffset
		});
	};

	var $scrollHandle = $( document.getElementsByClassName( 'ui-slider-handle' )[0] );
	$scrollHandle.html('|||');

	// sale-badge
	var saleBadge = '<div class="sale-badge">Sale</div>';
	var saleBadgewithBack = '<div class="sale-badge">Sale<div class="sale-badge__back-left"></div><div class="sale-badge__back-right"></div></div>';

	var $itemsSale = $( document.getElementsByClassName( 'new-products__item--sale' ) );

	if ( $itemsSale.length > 0 ) {
		$itemsSale
			.find('.new-products__img-box')
			.append( saleBadgewithBack );
	};
	

	// function debounce(func, wait, immediate) {
	// 	var timeout;
	// 	return function() {
	// 		var later = function() {
	// 			timeout = null;
	// 		};
	// 		var callNow = !timeout;
	// 		clearTimeout(timeout);
	// 		timeout = setTimeout(later, wait);
	// 		if (callNow) func();
	// 	};
	// };

	// function throttle(fn, threshhold) {
	// 	var last,
	// 	deferTimer;
	// 	return function () {
	// 		var context = this;
	// 		var now = +new Date;
	// 		var args = arguments;

	// 		if (last && now < last + threshhold) {
	// 			clearTimeout(deferTimer);
	// 			deferTimer = setTimeout(function () {
	// 				last = now;
	// 				fn.apply(context, args);
	// 			}, threshhold);
	// 		} else {
	// 			last = now;
	// 			fn.apply(context, args);
	// 		}
	// 	};
	// }

} );

// function myDebounce( fn, wait ) {
// 	var timeout;
// 	return function() {
// 		var context = this, args = arguments;

// 		clearTimeout( timeout );
// 		timeout = setTimeout(function() {
// 			fn.apply( context, arguments );
// 		}, wait);
// 	};
// }