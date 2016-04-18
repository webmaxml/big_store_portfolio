define(['jquery', 
	'underscore' , 
	'backbone', 
	'ui/unique-id', 
	'ui/effect', 
	'effect/effect-clip'], 
	function( $, _, Backbone ) {
	// $(function() {

	// 	/**
	// 	 * Shopping cart container
	// 	 *
	// 	 * @type {jquery}
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	var $shoppingCart = $( document.getElementsByClassName( 'shopping-cart' )[0] );

	// 	/**
	// 	 * Shopping basket
	// 	 *
	// 	 * @type {jquery}
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	var $shoppingBasket = $( document.getElementsByClassName( 'shopping-basket' )[0] );

	// 	/**
	// 	 * Shopping cart toggle button
	// 	 *
	// 	 * @type {jquery}
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	var $shoppingToggle = $( document.getElementsByClassName( 'shopping-cart__toggle' )[0] );

	// 	/**
	// 	 * Shopping cart amount display
	// 	 *
	// 	 * @type {jquery}
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	var $shoppingAmount = $( document.getElementsByClassName( 'shopping-cart__amount' )[0] );

	// 	/**
	// 	 * Shopping cart total price display
	// 	 *
	// 	 * @type {jquery}
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	var $shoppingPrice = $( document.getElementsByClassName( 'shopping-cart__price' )[0] );

	// 	$( document ).on( 'click', '.btn-cart', productAdd );
	// 	$shoppingCart.on( 'click', '.shopping-cart__toggle', shoppingCartToggle );
	// 	$shoppingCart.on( 'click', '.shopping-basket__delete-btn', itemCartDelete );

	// 	/**
	// 	 * Toggles shopping cart basket by invoking {@link module:shoppingCart~basketToggle|basketToggle}
	// 	 *
	// 	 * @listens module:shoppingCart#toggleClick
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function shoppingCartToggle() {
	// 		if ( $shoppingBasket.children().length == 0 ) { return; }
	// 		basketToggle();
	// 	}

	// 	/**
	// 	 * Toggles shopping cart basket with animation
	// 	 *
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function basketToggle() {
	// 		$shoppingBasket.slideToggle({
	// 			duration: 150,
	// 			complete: function() {
	// 				$shoppingToggle.toggleClass( 'shopping-cart__toggle--open' );
	// 			}
	// 		});
	// 	};

	// 	/**
	// 	 * Adding item to the basket, invoking {@link module:shoppingCart~getItemInfo|getItemInfo},
	// 	 * {@link module:shoppingCart~btnCartChecked|btnCartChecked},
	// 	 * {@link module:shoppingCart~refreshCartInfo|refreshCartInfo}.
	// 	 *
	// 	 * @param {clickEvent} event Click event object
	// 	 * @listens module:shoppingCart#addClick
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function productAdd( event ) {
	// 		var $target = $( event.target ).hasClass( 'btn-cart' ) ? 
	// 					  $( event.target ) : 
	// 					  $( event.target ).closest( '.btn-cart' );

	// 		if ( $target.hasClass( 'btn-cart--added' ) ) { return; }

	// 		var info = getItemInfo( $target );

	// 		// saving button ID to revoke changes after basket item deletion
	// 		var btnID = btnCartChecked( $target );

	// 		var item = '<li class="shopping-basket__item" data-id="' + btnID + '">' + 
	// 						'<div class="shopping-basket__img-box">' +
	// 							'<a class="shopping-basket__link" href="' + info.itemSrc + '">' + 
	// 								'<img class="shopping-basket__img" src="' + info.imgSrc + '" alt="' + info.imgAlt + '">' +
	// 							'</a>' +
	// 						'</div>' +
	// 						'<div class="shopping-basket__item-name">' +
	// 							'<a class="shopping-basket__link" href="' + info.itemSrc + '">' +
	// 								info.name +
	// 							'</a>' +
	// 						'</div>' +
	// 						'<div class="shopping-basket__price">' +
	// 							'<span class="shopping-basket__current-currency">' + info.currency + '</span>' +
	// 							'<span class="shopping-basket__current-value">' + info.price + '</span>' +
	// 						'</div>' +
	// 						'<div class="shopping-basket__delete">' +
	// 							'<button class="shopping-basket__delete-btn" type="button">' +
	// 								'<i class="fa fa-close shopping-basket__delete-icon"></i>' +
	// 							'</button>' +
	// 						'</div>' +
	// 					'</li>';

	// 		$shoppingBasket.append( item );
	// 		refreshCartInfo();
	// 	};

	// 	/**
	// 	 * Forms item info, returns an object containing it
	// 	 *
	// 	 * @param {jquery} $button The item cart button
	// 	 * @returns {object} An object containing item info
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function getItemInfo( $button ) {
	// 		var $item = $button.closest( 'li' );

	// 		// all items first class pattern - " 'class_name'__item "
	// 		var itemClass = $item.get(0)
	// 						 	 .classList[0]
	// 							 .split('__')[0];  

	// 		var itemImgClass = '.'.concat( itemClass, '__img' );
	// 		var itemNameClass = '.'.concat( itemClass, '__item-name' );
	// 		var itemCurrencyClass = '.'.concat( itemClass, '__current-currency' );
	// 		var itemPriceClass = '.'.concat( itemClass, '__current-value' );

	// 		return {
	// 			itemSrc: $item.find( itemNameClass ).children( 'a' ).attr( 'href' ),
	// 			imgSrc: $item.find( itemImgClass ).attr( 'src' ),
	// 			imgAlt: $item.find( itemImgClass ).attr( 'alt' ),
	// 			name: $item.find( itemNameClass ).children( 'a' ).html(),
	// 			currency: $item.find( itemCurrencyClass ).html(),
	// 			price: $item.find( itemPriceClass ).html()
	// 		};
	// 	};

	// 	/**
	// 	 * Changing the cart button after adding an item
	// 	 *
	// 	 * @param {jquery} $button The item cart button
	// 	 * @returns {string} Unique id for cart button to know that this item is added
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function btnCartChecked( $button ) {

	// 		var btnID = $button.uniqueId().attr( 'id' );

	// 		$button.addClass( 'btn-cart--added' );

	// 		$button.find( '.btn-cart__icon' )
	// 		.removeClass()
	// 		.addClass('fa fa-check btn-cart__icon');

	// 		if ( $button.hasClass( 'btn-cart--trending' ) ) {
	// 			$button.find( '.btn-cart__text' )
	// 			.html( 'Added!' );
	// 		}

	// 		return btnID;
	// 	};

	// 	/**
	// 	 * Changing the cart button to default state after removing item from the basket
	// 	 *
	// 	 * @param {string} btnID Unique id for cart button
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function btnCartRevoke( btnID ) {
	// 		var $button = $( document.getElementById( btnID ) );

	// 		$button.removeUniqueId();

	// 		$button.removeClass( 'btn-cart--added' );

	// 		$button.find( '.btn-cart__icon' )
	// 		.removeClass()
	// 		.addClass('fa fa-shopping-cart btn-cart__icon');

	// 		if ( $button.hasClass( 'btn-cart--trending' ) ) {
	// 			$button.find( '.btn-cart__text' )
	// 			.html( 'Add to cart' );
	// 		};
	// 	};

	// 	/**
	// 	 * Removing item from the basket, invoking {@link module:shoppingCart~refreshCartInfo|refreshCartInfo},
	// 	 * {@link module:shoppingCart~btnCartRevoke|btnCartRevoke},
	// 	 * and if the basket becomes empty - {@link module:shoppingCart~basketToggle|basketToggle}.
	// 	 *
	// 	 * @param {clickEvent} event Click event object
	// 	 * @listens module:shoppingCart#removeClick
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function itemCartDelete( event ) {
	// 		var $target = $( event.target );

	// 		var $item = $target.closest( 'li' );
	// 		var btnID = $item.data( 'id' );

	// 		$item.effect({
	// 			effect: 'clip',
	// 			duration: 300,
	// 			complete: function() {
	// 				$( this ).remove();

	// 				refreshCartInfo();
	// 				btnCartRevoke( btnID );

	// 				if ( $shoppingBasket.children().length == 0 ) {
	// 					basketToggle();
	// 				};
	// 			}
	// 		});
	// 	};

	// 	/**
	// 	 * Refreshing total price and item amount in the cart
	// 	 *
	// 	 * @memberof module:shoppingCart~
	// 	 */

	// 	function refreshCartInfo() {
	// 		var amount = $shoppingBasket.children().length;
	// 		var price = 0;

	// 		if ( amount > 0 ) {
	// 			$shoppingBasket.find( '.shopping-basket__current-value' )
	// 			.each( function() {
	// 				price += parseFloat( $( this ).html() );
	// 			} );
	// 		}

	// 		$shoppingAmount.html( amount );
	// 		$shoppingPrice.html( price.toFixed(2) );
	// 	};

	// });
});