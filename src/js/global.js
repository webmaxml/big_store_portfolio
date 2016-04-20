// define([ 'require',
// 	'jquery',
// 	'tabs',
// 	'rating',
// 	'techForm',
// 	'btnCart',
// 	'currency',
// 	'shoppingAmount',
// 	'shoppingCart', 
// 	'trending', 
// 	'mobileMenu', 
// 	'topSlider',
// 	'featuredSlider',
// 	'brandSlider',
// 	'productsScrollbar',
// 	'saleBadge', 
// 	'modernizr' ], 
// function( require,
// 		  $, 
// 		  Tabs, 
// 		  Rating, 
// 		  Form, 
// 		  BtnCart,
// 		  Currency,
// 		  ShoppingAmount ) 
// {

// 		var App = function() {

// 		// Tabs module 
// 		var tabs = document.getElementsByClassName( 'tabs' )[0];
// 		if ( tabs ) {
// 			this.tabs = new Tabs();
// 		};

// 		// Rating module 
// 		var rating = document.getElementsByClassName( 'rating' )[0];
// 		if ( rating ) {
// 			this.rating = new Rating();
// 		};

// 		// Product Module
// 		var productView = document.getElementsByClassName( 'product__thumbbox' )[0];
// 		if ( productView ) {
// 			require( ['productView'] );
// 		};

// 		// Form module
// 		var form = document.getElementsByClassName( 'tech-form' )[0];
// 		if ( form ) {
// 			this.form = new Form();
// 		};

// 		// BtnCart module
// 		this.btnCart = new BtnCart();

// 		// Currency module
// 		this.currency = new Currency();

// 		// ShoppingAmount module
// 		this.shoppingAmount = new ShoppingAmount();
// 	};

// 	return App;

// });


// import modules
// var productView = require( 'productView' );
// var currency = require( 'currency' );
var topSlider = require( './modules/topSlider' );
var featuredSlider = require( './modules/featuredSlider' );

function init() {

	var elements;

	var views = {
		// 'product__thumbwrap': productView,
		// 'currency': currency,
		'top-slider': topSlider,
		'featured__content': featuredSlider,
	};

	for ( var className in views ) {
		elements = document.getElementsByClassName( className );

		if ( elements.length > 0 ) {
			views[ className ].init( elements );
		}
	};

}

module.exports = { init: init };



