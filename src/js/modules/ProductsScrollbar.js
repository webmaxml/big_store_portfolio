/**
 * Fires when moving scrollbar handle
 *
 * @event module:productsScrollbar#slide
 */

/**
 * New products section scrollbar
 *
 * @module productsScrollbar
 * @requires libs/jquery
 * @requires libs/jqueryUI
 */

define(['jquery', 'jqueryUITouch', 'widget/slider'], function( $ ) {
	$(function() {
		
		/**
		 * Check if element exists, return if not
		 *
		 * @type {(element|undefined)}
		 * @memberof module:productsScrollbar~
		 */

		var itemViewport = document.getElementsByClassName( 'new-products__content' )[0];
		if ( !itemViewport ) { return; }

		/**
		 * New products content container
		 *
		 * @type {jquery}
		 * @memberof module:productsScrollbar~
		 */
		
		var $itemViewport = $( itemViewport );

		/**
		 * New products item box
		 *
		 * @type {jquery}
		 * @memberof module:productsScrollbar~
		 */

		var $itemBox = $( document.getElementsByClassName( 'new-products__item-box' )[0] );

		/**
		 * New products scrollbar container
		 *
		 * @type {jquery}
		 * @memberof module:productsScrollbar~
		 */

		var $scrollbar = $( document.getElementsByClassName( 'new-products__scrollbar' )[0] );

		/**
		 * Item box width as a sum of all items widths
		 *
		 * @type {number}
		 * @memberof module:productsScrollbar~
		 */

		var itemBoxWidth = 0;

		$itemBox.children().each( function() {
			itemBoxWidth += $( this ).outerWidth( true );
		} );

		/**
		 * Content viewport width
		 *
		 * @type {number}
		 * @memberof module:productsScrollbar~
		 */

		var itemViewportWidth = $itemViewport.width();

		/**
		 * Item box max offset as a substraction of {@link module:productsScrollbar~itemViewportWidth|itemViewportWidth}
		 * from {@link module:productsScrollbar~itemBoxWidth|itemBoxWidth}
		 *
		 * @type {number}
		 * @memberof module:productsScrollbar~
		 */

		var itemBoxMaxOffset = itemBoxWidth - itemViewportWidth;

		$itemBox.css( 'width', itemBoxWidth );

		$scrollbar.slider({
			slide: itemBoxSlide,
		});

		/**
		 * Scrollbar handle ( can be accessed only after instantiating a slider )
		 *
		 * @type {jquery}
		 * @memberof module:productsScrollbar~
		 */

		var $scrollHandle = $( document.getElementsByClassName( 'ui-slider-handle' )[0] );

		$scrollHandle.html('|||');

		/**
		 * Moving item box by adding margin-left
		 *
		 * @param {slideEvent} event jqueryUI slide event object
		 * @param {object} obj Slider position object
		 * @listens module:productsScrollbar#slide
		 * @memberof module:productsScrollbar~
		 */

		function itemBoxSlide( event, obj ) {
			$itemBox.css({
				'marginLeft': ( -obj.value / 100 ) * itemBoxMaxOffset
			});
		};
	});
});