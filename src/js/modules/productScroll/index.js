function init( productContainers ) {
	// import modules
	var $ = require( 'jquery' );
	var _ = require( 'underscore' );
	var ProductBox = require( './entities/productbox' );
	var Scrollbar = require( './entities/scrollbar' );
	var Handle = require( './entities/handle' );
	var Mediator = require( './mediator' );

	$( productContainers ).each( function() {

		var mediator = new Mediator();

		var productBox = this.querySelector( '[data-entity="product-box"]' );
		var scrollbar = this.querySelector( '[data-entity="scrollbar"]' );
		var handle = this.querySelector( '[data-entity="handle"]' );

		var productBoxModel = new ProductBox.Model();
		var productBoxView = new ProductBox.View({ el: productBox });
		var productBoxController = new ProductBox.Controller( mediator, productBoxModel, productBoxView );
		
		productBoxController.setWidth();

		var scrollbarModel = new Scrollbar.Model();
		var scrollbarView = new Scrollbar.View({ el: scrollbar });
		var scrollbarController = new Scrollbar.Controller( mediator, scrollbarModel, scrollbarView );

	} );

};

module.exports = { init: init };
