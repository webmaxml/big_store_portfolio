define(['jquery', 'isotope', 'jquery-bridget/jquery.bridget'], function( $, Isotope ) {
	$.bridget( 'isotope', Isotope );

	$(function() {
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
	});

});