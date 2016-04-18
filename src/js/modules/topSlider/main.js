define(['jquery', './entities/container','./entities/slides', './entities/buttons'], function( $, Container, Slides, Buttons) {

	function init( sliderContainer ) {

		var prevButton = document.getElementsByClassName( 'top-slider__btn-prev' );
		var nextButton = document.getElementsByClassName( 'top-slider__btn-next' );

		// there should be only 1 top slider but who knows...
		$( sliderContainer ).each(function() {
		
			// slides
			var slidesCollection = new Slides.Collection([
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
			]);

			var slidesWrap = document.createDocumentFragment();

			slidesCollection.each( function( model ) {
				var slideView = new Slides.View({ model: model });

				slideView.render();
				slidesWrap.appendChild( slideView.el );
			});

			// container
			var ContainerView = new Container.View({ el: this });
			var ContainerController = new Container.Controller( null, ContainerView );

			ContainerView.el.appendChild( slidesWrap );
			ContainerView.render();

			// buttons
			var prevModel = new Buttons.Model({ type: 'prev' });
			var prevView = new Buttons.View({ el: prevButton, model: prevModel });
			var prevController = new Buttons.Controller( prevModel, prevView );

			var nextModel = new Buttons.Model({ type: 'next' });
			var nextView = new Buttons.View({ el: nextButton, model: nextModel });
			var nextController = new Buttons.Controller( nextModel, nextView );

		});

	};

	return { init: init };

});