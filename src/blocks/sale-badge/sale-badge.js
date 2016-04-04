/**
 * Appending sale badge on product item
 *
 * @module saleBadge
 * @requires libs/jquery
 */

define(['jquery'], function( $ ) {
	$(function() {

		/**
		 * Set of items to append sale badge WITHOUT back side
		 *
		 * @type {jquery}
		 * @memberof module:saleBadge~
		 */

		var $itemsSale = $( document.getElementsByClassName( 'trending__item--sale' ) );

		/**
		 * Set of items to append sale badge WITH back side
		 *
		 * @type {jquery}
		 * @memberof module:saleBadge~
		 */

		var $itemsSaleWithBack = $( document.getElementsByClassName( 'product-panel__item--sale' ) );

		/**
		 * HTML string of the sale badge WITHOUT back side
		 *
		 * @type {string}
		 * @memberof module:saleBadge~
		 */

		var saleBadge = '<div class="sale-badge sale-badge--trending">Sale</div>';

		/**
		 * HTML string of the sale badge WITH back side
		 *
		 * @type {string}
		 * @memberof module:saleBadge~
		 */

		var saleBadgewithBack = '<div class="sale-badge">Sale<div class="sale-badge__back-left"></div><div class="sale-badge__back-right"></div></div>';

		// appending sale badges if items exist 

		if ( $itemsSale.length > 0 ) {
			$itemsSale.append( saleBadge );
		};
		
		if ( $itemsSaleWithBack.length > 0 ) {
			$itemsSaleWithBack
			.find('.product-panel__img-box')
			.append( saleBadgewithBack );
		};
	});
});