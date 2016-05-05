// import modules
var windowModule = require( './modules/window' ),
	thumbGallery = require( './modules/thumbGallery' ),
	topSlider = require( './modules/topSlider' ),
 	featuredSlider = require( './modules/featuredSlider' ),
 	currency = require( './modules/currency' ),
 	tabs = require( './modules/tabs' ),
 	brandSlider = require( './modules/brandSlider' ),
 	setRating = require( './modules/setRating' );
 	showRating = require( './modules/showRating' ),
 	productScroll = require( './modules/productScroll' );

function init() {

	

	var dataValues = {
		'setrating'      :     setRating,
		'showrating'     :     showRating,
		'tabs'           :     tabs,
		'brandslider'    :     brandSlider,
		'topslider'      :     topSlider,
		'featuredslider' :     featuredSlider,
		'currency'       :     currency,
		'thumbgallery'   :     thumbGallery,
		'product-scroll' :     productScroll
	};

	for ( var value in dataValues ) {
		var containers = document.querySelectorAll( '[data-module="' + value + '"]' );

		if ( containers.length > 0 ) {
			dataValues[ value ].init( containers );
		}
	};

	// common modules
	windowModule.init();

};

module.exports = { init: init };



