/**
 * Fires when clicking on the trending nav items
 *
 * @event module:trending#click
 */

/**
 * Trending section item grid positioning and toggling
 *
 * @module trending
 * @requires libs/jquery
 * @requires libs/isotope
 */

define(['jquery', 'isotope', 'jquery-bridget/jquery.bridget'], function( $, Isotope ) {
	$.bridget( 'isotope', Isotope );

	$(function() {
		
		/**
		 * Check if element exists, return if not
		 *
		 * @type {(element|undefined)}
		 * @memberof module:trending~
		 */

		var trendingNav = document.getElementsByClassName( 'trending__nav' )[0];
		if ( !trendingNav ) { return; }

		/**
		 * Trending navigation container
		 *
		 * @type {jquery}
		 * @memberof module:trending~
		 */
		
		var $trendingNav = $( trendingNav );

		/**
		 * Trending product item box
		 *
		 * @type {jquery}
		 * @memberof module:trending~
		 */

		var $trendingGrid = $( document.getElementsByClassName( 'trending__item-box' ) );

		/**
		 * Active nav item
		 *
		 * @type {jquery}
		 * @memberof module:trending~
		 */

		var $trendingNavActive = $trendingNav.children()
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

		/**
		 * Toggling active nav item and arranging items with {@link module:libs/isotope|isotope}
		 *
		 * @param {clickEvent} event Click event object
		 * @listens module:trending#click
		 * @memberof module:trending~
		 */

		function trendingNavSelect( event ) {
			var $target = $( event.target );

			$trendingNavActive.removeClass( 'trending__nav-item--active' );
			$trendingNavActive = $target.addClass( 'trending__nav-item--active' );

			$trendingGrid.isotope( { filter: trendingItemArrange } );
		};

		/**
		 * Custom arranging function used by {@link module:libs/isotope|isotope}
		 *
		 * @returns {bool} whether the current item filter match the required filter
		 * @memberof module:trending~
		 */

		function trendingItemArrange() {
			var activeFilter = $trendingNavActive.data( 'filter' );
			var itemFilter = $( this ).data( 'filter' );

			return ~itemFilter.indexOf( activeFilter ) ? true : false;
		};
	});

});