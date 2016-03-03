jQuery( function( $ ) {


	/*
	** shopping cart
	*/ 


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


	/*
	** mobile-menu
	*/


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


	/*
	** top slider
	*/


	var $topSlider = $( document.getElementsByClassName( 'top-slider' )[0] );
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
		var isPrev = target.classList.contains( 'top-slider__btn-prev' );
		var isNext = target.classList.contains( 'top-slider__btn-next' );

		if ( isPrev ) { $topSlider.trigger( 'owl.prev' ); }
		if ( isNext ) { $topSlider.trigger( 'owl.next' ); }
	};


	/*
	** featured slider
	*/


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


	/*
	** brand slider
	*/


	var $brandSlider = $( document.getElementsByClassName( 'brand-slider' )[0] );
	var $brandSliderWrap = $( document.getElementsByClassName( 'footer__brand-slider-wrap' )[0] );

	$brandSlider.owlCarousel({
		items: 4,
		pagination: false,
	});

	$brandSliderWrap.on( 'click', '.brand-slider__btn-prev, .brand-slider__btn-next', brandSliderMove );

	function brandSliderMove( event ) {
		var target = event.target;
		var isPrev = target.classList.contains( 'brand-slider__btn-prev' );
		var isNext = target.classList.contains( 'brand-slider__btn-next' );

		if ( isPrev ) { $brandSlider.trigger( 'owl.prev' ); }
		if ( isNext ) { $brandSlider.trigger( 'owl.next' ); }
	};


	/*
	** new-products scrollbar
	*/


	var $itemViewport = $( document.getElementsByClassName( 'new-products__content' )[0] );
	var $itemBox = $( document.getElementsByClassName( 'new-products__item-box' )[0] );
	var $scrollbar = $( document.getElementsByClassName( 'new-products__scrollbar' )[0] );

	var itemBoxWidth = 0;

	$itemBox.children().each( function() {
		itemBoxWidth += $( this ).outerWidth( true );
	} );  

	var itemViewportWidth = $itemViewport.width();

	var itemBoxMaxOffset = itemBoxWidth - itemViewportWidth;

	$itemBox.css( 'width', itemBoxWidth );

	$scrollbar.slider({
		slide: itemBoxSlide,
	});

	var $scrollHandle = $( document.getElementsByClassName( 'ui-slider-handle' )[0] );
	$scrollHandle.html('|||');

	function itemBoxSlide( event, obj ) {
		$itemBox.css({
			'marginLeft': ( -obj.value / 100 ) * itemBoxMaxOffset
		});
	};


	/*
	** sale-badge
	*/


	var $itemsSale = $( document.getElementsByClassName( 'trending__item--sale' ) );
	var $itemsSaleWithBack = $( document.getElementsByClassName( 'new-products__item--sale' ) );

	var saleBadge = '<div class="sale-badge sale-badge--trending">Sale</div>';
	var saleBadgewithBack = '<div class="sale-badge">Sale<div class="sale-badge__back-left"></div><div class="sale-badge__back-right"></div></div>';

	if ( $itemsSale.length > 0 ) {
		$itemsSale.append( saleBadge );
	};
	
	if ( $itemsSaleWithBack.length > 0 ) {
		$itemsSaleWithBack
			.find('.new-products__img-box')
			.append( saleBadgewithBack );
	};


	/*
	** trending menu
	*/


	var $trendingNav = $( document.getElementsByClassName( 'trending__nav' ) );
	var $trendingGrid = $( document.getElementsByClassName( 'trending__item-box' ) );
	var $trendingNavActive = $trendingNav
									.children()
									.first()
									.addClass( 'trending__nav-item--active' );

	$trendingNav.on( 'click', '.trending__nav-item', trendingNavSelect );

	$trendingGrid.isotope({
		itemSelector: '.trending__item',
		percentPosition: true,
		masonry: {
			columnWidth: '.trending__item'
		},
		filter: trendingItemArrange
	});

	function trendingNavSelect( event ) {
		var $target = $( event.target );

		$trendingNavActive.removeClass( 'trending__nav-item--active' );
		$trendingNavActive = $target.addClass( 'trending__nav-item--active' );

		$trendingGrid.isotope( { filter: trendingItemArrange } );
	};

	function trendingItemArrange() {
		var activeFilter = $trendingNavActive.data( 'filter' );
		var itemFilter = $( this ).data( 'filter' );

		return ~itemFilter.indexOf( activeFilter ) ? true : false;
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