// import modules
var $ = require( 'jquery' );
var _ = require( 'underscore' );
var Container = require( './entities/container' );
var Slides = require( './entities/slides' );
var Buttons = require( './entities/buttons' );

// gets cached container element from the global initializer
function init( sliderContainer ) {

	// there should be only 1 top slider but who knows...
	$( sliderContainer ).each(function() {

		// creating slides
		var slidesInfo = [
			{
				imgSrc: 'img/slider_item.png',
				imgAlt: 'slider_item',
				header: 'Where can I get some',
				text: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum'
			},
			{
				imgSrc: 'img/slider_item.png',
				imgAlt: 'slider_item',
				header: 'Where can I get some',
				text: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum'
			},
			{
				imgSrc: 'img/slider_item.png',
				imgAlt: 'slider_item',
				header: 'Where can I get some',
				text: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum'
			},
			{
				imgSrc: 'img/slider_item.png',
				imgAlt: 'slider_item',
				header: 'Where can I get some',
				text: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum'
			}
		];

		var slidesWrap = document.createDocumentFragment();


		_.each( slidesInfo, function( item ) {
			var slideModel = new Slides.Model( item );
			var slideView = new Slides.View({ model: slideModel });

			slideView.render();
			slidesWrap.appendChild( slideView.el );
		} )

		// creating container
		var ContainerView = new Container.View({ el: this });
		var ContainerController = new Container.Controller( null, ContainerView );

		ContainerView.el.appendChild( slidesWrap );
		ContainerView.render();

		// creating buttons
		var prevButton = document.getElementsByClassName( 'top-slider__btn-prev' );
		var nextButton = document.getElementsByClassName( 'top-slider__btn-next' );

		var prevModel = new Buttons.Model({ type: 'prev' });
		var prevView = new Buttons.View({ el: prevButton, model: prevModel });
		var prevController = new Buttons.Controller( prevModel, prevView );

		var nextModel = new Buttons.Model({ type: 'next' });
		var nextView = new Buttons.View({ el: nextButton, model: nextModel });
		var nextController = new Buttons.Controller( nextModel, nextView );

	});

};

module.exports = { init: init };
