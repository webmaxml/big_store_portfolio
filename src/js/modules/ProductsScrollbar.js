define(['jquery', 'jqueryUITouch', 'widget/slider'], function( $ ) {
	$(function() {
		var $itemViewport = $( document.getElementsByClassName( 'new-products__content' )[0] );
		var $itemBox = $( document.getElementsByClassName( 'new-products__item-box' )[0] );
		var $scrollbar = $( document.getElementsByClassName( 'new-products__scrollbar' )[0] );

		var itemBoxWidth = 0;

		$itemBox.children().each( function() {
			itemBoxWidth += $( this ).outerWidth( true );
		} );  

		var itemViewportWidth = $itemViewport.width();

		var itemBoxMaxOffset = itemBoxWidth - itemViewportWidth;

		$itemBox.css( 'width', itemBoxWidth );

		$scrollbar.slider({
			slide: itemBoxSlide,
		});

		var $scrollHandle = $( document.getElementsByClassName( 'ui-slider-handle' )[0] );
		$scrollHandle.html('|||');

		function itemBoxSlide( event, obj ) {
			$itemBox.css({
				'marginLeft': ( -obj.value / 100 ) * itemBoxMaxOffset
			});
		};
	});
});