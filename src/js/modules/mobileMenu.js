define(['jquery'], function( $ ) {
	$(function() {

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
		
	});
});