// import modules
var thumbGallery = require( './modules/thumbGallery' ),
	topSlider = require( './modules/topSlider' ),
 	featuredSlider = require( './modules/featuredSlider' ),
 	currency = require( './modules/currency' ),
 	tabs = require( './modules/tabs' ),
 	brandSlider = require( './modules/brandSlider' );

function init() {

	var elements;

	var views = {
		'product__thumbwrap': thumbGallery,
		'top-slider': topSlider,
		'featured__content': featuredSlider,
		'currency': currency,
		'tabs__item': tabs,
		'brand-slider': brandSlider
	};

	for ( var className in views ) {
		elements = document.getElementsByClassName( className );

		if ( elements.length > 0 ) {
			views[ className ].init( elements );
		}
	};

}

module.exports = { init: init };



