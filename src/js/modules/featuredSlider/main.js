define(['jquery', './entities/container', './entities/slides', './entities/buttons'], 
function( $, Container, Slides, Buttons) {

	function init( featuredContainer ) {
		// create set for every featured slider
		$( featuredContainer ).each( function() {
			
			// container
			var containerView = new Container.View({ el: this });
			var containerController = new Container.Controller( null, containerView );

		} );
	};

	return { init: init };

});