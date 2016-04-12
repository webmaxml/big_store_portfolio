define([ 'jquery',
		'tabs',
		'rating',
		'modernizr', 
		'shoppingCart', 
		'trending', 
		'mobileMenu', 
		'topSlider',
		'featuredSlider',
		'brandSlider',
		'productsScrollbar',
		'saleBadge', 
		'productView',
		'techForm' ], 
function( $, Tabs, Rating ) {
	
	var App = function() {

		// Tabs module 
		var tabs = document.getElementsByClassName( 'tabs' )[0];
		if ( tabs ) {
			this.tabs = new Tabs();
		};

		// Rating module 
		var rating = document.getElementsByClassName( 'rating' )[0];
		if ( rating ) {
			this.rating = new Rating();
		};

	};

	return App;

});




