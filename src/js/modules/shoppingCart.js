define(['jquery'], function( $ ) {
	$(function() {
		var $shoppingCart = $( document.getElementsByClassName( 'shopping-cart' )[0] );
		var $shoppingBasket = $( document.getElementsByClassName( 'shopping-basket' )[0] );
		var $shoppingToggle = $( document.getElementsByClassName( 'shopping-cart__toggle' )[0] );
		var $shoppingAmount = $( document.getElementsByClassName( 'shopping-cart__amount' )[0] );
		var $shoppingPrice = $( document.getElementsByClassName( 'shopping-cart__price' )[0] );

		$( document ).on( 'click', '.btn-cart', productAdd );
		$shoppingCart.on( 'click', '.shopping-cart__toggle', shoppingCartToggle );
		$shoppingCart.on( 'click', '.shopping-basket__delete-btn', itemCartDelete );

		function shoppingCartToggle() {
			if ( $shoppingBasket.children().length == 0 ) { return; }
			basketToggle();
		}

		function basketToggle() {
			$shoppingBasket.slideToggle({
				duration: 150,
				complete: function() {
					$shoppingToggle.toggleClass( 'shopping-cart__toggle--open' );
				}
			});
		};

		function productAdd( event ) {
			var $target = $( event.target ).hasClass( 'btn-cart' ) ? 
			$( event.target ) : 
			$( event.target ).closest( '.btn-cart' );

			if ( $target.hasClass( 'btn-cart--added' ) ) { return; }

			var info = getItemInfo( $target );

		// saving button ID to revoke changes after basket item deletion
		var btnID = btnCartChecked( $target );

		var item = '<li class="shopping-basket__item" data-id="' + btnID + '">' + 
						'<div class="shopping-basket__img-box">' +
							'<a class="shopping-basket__link" href="' + info.itemSrc + '">' + 
								'<img class="shopping-basket__img" src="' + info.imgSrc + '" alt="' + info.imgAlt + '">' +
							'</a>' +
						'</div>' +
						'<div class="shopping-basket__item-name">' +
							'<a class="shopping-basket__link" href="' + info.itemSrc + '">' +
								info.name +
							'</a>' +
						'</div>' +
						'<div class="shopping-basket__price">' +
							'<span class="shopping-basket__current-currency">' + info.currency + '</span>' +
							'<span class="shopping-basket__current-value">' + info.price + '</span>' +
						'</div>' +
						'<div class="shopping-basket__delete">' +
							'<button class="shopping-basket__delete-btn" type="button">' +
								'<i class="fa fa-close shopping-basket__delete-icon"></i>' +
							'</button>' +
						'</div>' +
					'</li>';

		$shoppingBasket.append( item );
		refreshCartInfo();
		};

		function getItemInfo( $button ) {
			var $item = $button.closest( 'li' );

			// all items first class pattern - " 'class_name'__item "
			var itemClass = $item.get(0)
			.classList[0]
			.split('__')[0];  

			var itemImgClass = '.'.concat( itemClass, '__img' );
			var itemNameClass = '.'.concat( itemClass, '__item-name' );
			var itemCurrencyClass = '.'.concat( itemClass, '__current-currency' );
			var itemPriceClass = '.'.concat( itemClass, '__current-value' );

			return {
				itemSrc: $item.find( itemNameClass ).children( 'a' ).attr( 'href' ),
				imgSrc: $item.find( itemImgClass ).attr( 'src' ),
				imgAlt: $item.find( itemImgClass ).attr( 'alt' ),
				name: $item.find( itemNameClass ).children( 'a' ).html(),
				currency: $item.find( itemCurrencyClass ).html(),
				price: $item.find( itemPriceClass ).html()
			};
		};

		function btnCartChecked( $button ) {

			// set unique ID for button to revoke changes after basket item deletion
			var btnID = $button.uniqueId().attr( 'id' );

			$button.addClass( 'btn-cart--added' );

			$button.find( '.btn-cart__icon' )
			.removeClass()
			.addClass('fa fa-check btn-cart__icon');

			if ( $button.hasClass( 'btn-cart--trending' ) ) {
				$button.find( '.btn-cart__text' )
				.html( 'Added!' );
			}

			return btnID;
		};

		function btnCartRevoke( btnID ) {
			var $button = $( document.getElementById( btnID ) );

			$button.removeUniqueId();

			$button.removeClass( 'btn-cart--added' );

			$button.find( '.btn-cart__icon' )
			.removeClass()
			.addClass('fa fa-shopping-cart btn-cart__icon');

			if ( $button.hasClass( 'btn-cart--trending' ) ) {
				$button.find( '.btn-cart__text' )
				.html( 'Add to cart' );
			};
		};

		function itemCartDelete( event ) {
			var $target = $( event.target );

			var $item = $target.closest( 'li' );
			var btnID = $item.data( 'id' );

			$item.effect({
				effect: 'clip',
				duration: 300,
				complete: function() {
					$( this ).remove();

					refreshCartInfo();
					btnCartRevoke( btnID );

					if ( $shoppingBasket.children().length == 0 ) {
						basketToggle();
					};
				}
			});
		};

		function refreshCartInfo() {
			var amount = $shoppingBasket.children().length;
			var price = 0;

			if ( amount > 0 ) {
				$shoppingBasket.find( '.shopping-basket__current-value' )
				.each( function() {
					price += parseFloat( $( this ).html() );
				} );
			}

			$shoppingAmount.html( amount );
			$shoppingPrice.html( price.toFixed(2) );
		};

	});
});