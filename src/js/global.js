// import modules
var windowModule = require( './modules/window' ),
	documentModule = require( './modules/document' ),
	thumbGallery = require( './modules/thumbGallery' ),
	topSlider = require( './modules/topSlider' ),
 	featuredSlider = require( './modules/featuredSlider' ),
 	currency = require( './modules/currency' ),
 	tabs = require( './modules/tabs' ),
 	brandSlider = require( './modules/brandSlider' ),
 	setRating = require( './modules/setRating' );
 	showRating = require( './modules/showRating' ),
 	productScroll = require( './modules/productScroll' ),
 	trending = require( './modules/trending' );

function init() {

	// common modules
	windowModule.init();
	documentModule.init();

	var dataValues = {
		'setrating'      :     setRating,
		'showrating'     :     showRating,
		'tabs'           :     tabs,
		'brandslider'    :     brandSlider,
		'topslider'      :     topSlider,
		'featuredslider' :     featuredSlider,
		'currency'       :     currency,
		'thumbgallery'   :     thumbGallery,
		'product-scroll' :     productScroll,
		'trending'       :     trending
	};

	for ( var value in dataValues ) {
		var containers = document.querySelectorAll( '[data-module="' + value + '"]' );

		if ( containers.length > 0 ) {
			dataValues[ value ].init( containers );
		}
	};

};

module.exports = { init: init };



