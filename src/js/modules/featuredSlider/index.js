// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Container = require( './entities/container' );
var Slides = require( './entities/slides' );
var Buttons = require( './entities/buttons' );

// the virtual data for the app
var data = require( '../../data' );

function init( elements ) {

	// create set for every element
	$( elements ).each( function() {
		
		// create slides
		var slidesWrap = document.createDocumentFragment();

		_.each( data.products, function( item ) {

			// only for products with featured flag
			if ( item.featured ) {
				var slideModel = new Slides.Model( item );
				var slideView = new Slides.View({ model: slideModel });

				slideView.render();
				slidesWrap.appendChild( slideView.el );
			}
			
		} );

		// create container
		var containerView = new Container.View({ el: this });
		var containerController = new Container.Controller( null, containerView );
		containerView.el.appendChild( slidesWrap );
		containerView.render();

		// create buttons
		var prevButton = document.getElementsByClassName( 'featured__btn-prev' );
		var nextButton = document.getElementsByClassName( 'featured__btn-next' );

		var prevModel = new Buttons.Model({ type: 'prev' });
		var prevView = new Buttons.View({ el: prevButton, model: prevModel });
		var prevController = new Buttons.Controller( prevModel, prevView );

		var nextModel = new Buttons.Model({ type: 'next' });
		var nextView = new Buttons.View({ el: nextButton, model: nextModel });
		var nextController = new Buttons.Controller( nextModel, nextView );

	} );

};

module.exports = { init: init };
