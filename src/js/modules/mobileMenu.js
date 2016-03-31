/**
 * Click event on mbile menu toggle 
 *
 * @event module:mobileMenu#click
 */

/**
 * Header mobile menu
 *
 * @module mobileMenu
 * @requires libs/jquery
 */


define(['jquery'], function( $ ) {
	$(function() {

		/**
		 * Header container
		 *
		 * @type {jquery}
		 * @memberof module:mobileMenu~
		 */

		var $header = $( document.getElementsByClassName( 'header' )[0] );

		/**
		 * Menu container
		 *
		 * @type {jquery}
		 * @memberof module:mobileMenu~
		 */

		var $mobileMenu = $( document.getElementsByClassName( 'header__mobile-menu' )[0] );

		/**
		 * Mobile toggle button
		 *
		 * @type {jquery}
		 * @memberof module:mobileMenu~
		 */

		var $mobileToggle = $( document.getElementsByClassName( 'header__mobile-toggle' )[0] );

		$header.on( 'click', '.header__mobile-toggle', menuToggle );

		/**
		 * Toggles mobile menu
		 *
		 * @listens module:mobileMenu#click
		 * @memberof module:mobileMenu~
		 */

		function menuToggle() {
			$mobileMenu.fadeToggle({
				duration: 200,
				complete: function() {
					$mobileToggle.toggleClass( 'header__mobile-toggle--open' );
				}
			})
		};
		
	});
});