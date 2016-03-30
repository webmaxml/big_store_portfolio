/**
 * Fires when clicking on image thumb
 * @event module:productView#click
 */

/**
 * Product view on the product page
 *
 * @module productView
 * @requires libs/jquery
 * @requires libs/jqueryUI
 */

define(['jquery', 'ui/effect', 'effect/effect-fade'], function( $ ) {
	$(function() {

		/**
		 * Check if element exists, return if not
		 *
		 * @type {(element|undefined)}
		 * @memberof module:productView~
		 */

		var thumbBox = document.getElementsByClassName( 'product__thumbbox' )[0];
		if ( !thumbBox ) { return; }

		/**
		 * Container of thumbs
		 *
		 * @type {jquery}
		 * @memberof module:productView~
		 */

		var $thumbBox = $( thumbBox );

		/**
		 * Active thumb wrap that highlights
		 *
		 * @type {jquery}
		 * @memberof module:productView~
		 */

		var $activeThumbWrap = $thumbBox.children().first();

		/**
		 * Active image container
		 *
		 * @type {jquery}
		 * @memberof module:productView~
		 */

		var $imgBox = $( document.getElementsByClassName( 'product__imgbox' )[0] );

		/**
		 * Active image
		 *
		 * @type {jquery}
		 * @memberof module:productView~
		 */

		var $activeImg;


		
		thumbExpose( $activeThumbWrap.children().first() );
		setActiveWrap( $activeThumbWrap );

		
		$thumbBox.on( 'click', '.product__thumbwrap', thumbToggle );

		/**
		 * Toggles thumb to active image by invoking {@link module:productView~thumbExpose|thumbExpose}
		 * and {@link module:productView~setActiveWrap|setActiveWrap}
		 *
		 * @param {clickEvent} event Click event object
		 * @listens module:productView#click
		 * @memberof module:productView~
		 */

		function thumbToggle( event ) {
			var $thumb = event.target.nodeName === 'IMG' ? $( event.target ) :
														   $( event.target.firstChild );
			var $thumbWrap = $thumb.parent();

			thumbExpose( $thumb );
			setActiveWrap( $thumbWrap );
		};

		/**
		 * Takes thumb object, cloning it with {@link module:productView~createImgClone|createImgClone}
		 * and appending to the document by {@link module:productView~appendImage|appendImage}
		 * 
		 * @param {jquery} $thumb image thumb
		 * @memberof module:productView~
		 */

		function thumbExpose( $thumb ) {
			
			var $clone = createImgClone( $thumb );

			if ( $activeImg ) {
				$activeImg.hide({
					effect: 'fade',
					duration: 100,
					complete: function() {
						$( this ).remove();
						appendImage( $clone );
					}
				});
			} else {
				appendImage( $clone );
			}	
		};

		/**
		 * Takes img object, creating by {@link module:productView~createImgClone|createImgClone}
		 * and appends it to the document with animation
		 * 
		 * @param {jquery} $img image
		 * @memberof module:productView~
		 */

		function appendImage( $img ) {
			$imgBox.append( $img );
			$img.show('fade', 100);
			$activeImg = $img;
		};

		/**
		 * Toggles selection around {@link module:productView~$activeThumbWrap|$activeThumbWrap}, 
		 * takes an $elem that becomes {@link module:productView~$activeThumbWrap|$activeThumbWrap}
		 *
		 * @param {jquery} $elem image thumb wrap
		 * @memberof module:productView~
		 */

		function setActiveWrap( $elem ) {
			$activeThumbWrap.removeClass( 'product__thumbwrap--active' );
			$activeThumbWrap = $elem.addClass( 'product__thumbwrap--active' );
		};

		/**
		 * Clones image
		 *
		 * @param {jquery} $img image
		 * @returns {jquery} Cloned image 
		 * @memberof module:productView~
		 */

		function createImgClone( $img ) {
			var $clone = $( document.createElement( 'img' ) );
			$clone.attr( 'src', $img.attr( 'src' ) );
			$clone.attr( 'alt', $img.attr( 'alt' ) );
			$clone.addClass( 'product__img' ).css({ 'display': 'none' });

			return $clone;
		};
	});
});