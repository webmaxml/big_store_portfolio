// import modules
var thumbGallery = require( './modules/thumbGallery' ),
	topSlider = require( './modules/topSlider' ),
 	featuredSlider = require( './modules/featuredSlider' ),
 	currency = require( './modules/currency' ),
 	tabs = require( './modules/tabs' ),
 	brandSlider = require( './modules/brandSlider' ),
 	setRating = require( './modules/setRating' );
 	showRating = require( './modules/showRating' );

function init() {

	var elements;

	var views = {
		'product__thumbwrap': thumbGallery,
	};

	for ( var className in views ) {
		elements = document.getElementsByClassName( className );

		if ( elements.length > 0 ) {
			views[ className ].init( elements );
		}
	};

	var dataValues = {
		'setrating'      :     setRating,
		'showrating'     :     showRating,
		'tabs'           :     tabs,
		'brandslider'    :     brandSlider,
		'topslider'      :     topSlider,
		'featuredslider' :     featuredSlider,
		'currency'       :     currency
	};

	for ( var value in dataValues ) {
		var containers = document.querySelectorAll( '[data-module="' + value + '"]' );

		if ( containers.length > 0 ) {
			dataValues[ value ].init( containers );
		}
	};

}

module.exports = { init: init };



