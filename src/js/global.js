define([ 'jquery',
		'tabs',
		'rating',
		'productView',
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
function( $, Tabs, Rating, ProductView ) {
	
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

		// Product Module
		var productView = document.getElementsByClassName( 'product__thumbbox' )[0];
		if ( productView ) {
			this.productView = new ProductView();
		};
	};

	return App;

});




