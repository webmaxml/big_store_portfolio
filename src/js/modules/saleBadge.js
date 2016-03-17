define(['jquery'], function( $ ) {
	$(function() {
		var $itemsSale = $( document.getElementsByClassName( 'trending__item--sale' ) );
		var $itemsSaleWithBack = $( document.getElementsByClassName( 'new-products__item--sale' ) );

		var saleBadge = '<div class="sale-badge sale-badge--trending">Sale</div>';
		var saleBadgewithBack = '<div class="sale-badge">Sale<div class="sale-badge__back-left"></div><div class="sale-badge__back-right"></div></div>';

		if ( $itemsSale.length > 0 ) {
			$itemsSale.append( saleBadge );
		};
		
		if ( $itemsSaleWithBack.length > 0 ) {
			$itemsSaleWithBack
			.find('.new-products__img-box')
			.append( saleBadgewithBack );
		};
	});
});