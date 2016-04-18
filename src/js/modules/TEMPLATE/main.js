define(['jquery', './item'], function( $, Item) {

	function init( elements ) {

		var collection = new Item.Collection();

		// create set for every element
		$( elements ).each( function() {
			var model = collection.add({});
			var view = new Item.View({ el: this, model: model });
			var controller = new Item.Controller( model, view );
		} );

	};

	return { init: init };

});