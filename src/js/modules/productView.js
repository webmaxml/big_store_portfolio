define(['jquery', 'ui/effect', 'effect/effect-fade'], function( $ ) {
	$(function() {
		// if exists
		var thumbBox = document.getElementsByClassName( 'product__thumbbox' )[0];
		if ( !thumbBox ) { return; }

		var $thumbBox = $( thumbBox );
		var $imgBox = $( document.getElementsByClassName( 'product__imgbox' )[0] );
		var $activeImg = $( document.getElementsByClassName( 'product__img' )[0] );
		var $activeThumb = $thumbBox.children()
									.first()
									.addClass( 'product__thumbwrap--active' );

		thumbExpose( $activeThumb.children().first() );

		$thumbBox.on( 'click', '.product__thumbwrap', thumbToggle );
		
		function thumbToggle( event ) {
			var $thumb = event.target.nodeName === 'IMG' ? $( event.target ) :
			$( event.target.firstChild );

			thumbExpose( $thumb );

			$activeThumb.removeClass( 'product__thumbwrap--active' );
			$activeThumb = $thumb.parent().addClass( 'product__thumbwrap--active' );
		};

		function thumbExpose( $thumb ) {
			var $img = $( document.createElement( 'img' ) );
			$img.attr( 'src', $thumb.attr( 'src' ) );
			$img.attr( 'alt', $thumb.attr( 'alt' ) );
			$img.addClass( 'product__img' ).css({ 'display': 'none' });

			if ( $activeImg ) {
				$activeImg.hide({
					effect: 'fade',
					duration: 100,
					complete: function() {
						$( this ).remove();

						$imgBox.append( $img );

						$img.show('fade', 100);

						$activeImg = $img;
					}
				});
			} else {
				$imgBox.append( $img );

				$img.show('fade', 100);

				$activeImg = $img;
			}	
		};
	});
});