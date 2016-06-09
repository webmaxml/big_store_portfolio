// deps
import React from 'react';
import $ from 'jquery';
import IScroll from 'iscroll';
// components
import ProductItem from './productItem';

class NewProducts extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: [
        		{
        			id: 1,
        			href: 'product.html',
					imgSrc: 'img/new_item_1.png',
					imgAlt: 'new_item_1',
					name: 'Lorem ipsum dolor sit',
					oldPrice: 69.99,
					newPrice: 34.99
        		},
        		{
        			id: 2,
        			href: 'product.html',
					imgSrc: 'img/new_item_2.png',
					imgAlt: 'new_item_2',
					name: 'Lorem ipsum dolor sit',
					oldPrice: 69.99,
					newPrice: 34.99
        		},
        		{
        			id: 3,
        			href: 'product.html',
					imgSrc: 'img/new_item_3.png',
					imgAlt: 'new_item_3',
					name: 'Lorem ipsum dolor sit',
					oldPrice: 69.99,
					newPrice: 34.99
        		},
        		{
        			id: 4,
        			href: 'product.html',
					imgSrc: 'img/new_item_1.png',
					imgAlt: 'new_item_1',
					name: 'Lorem ipsum dolor sit',
					oldPrice: 69.99,
					newPrice: 34.99
        		},
        		{
        			id: 5,
        			href: 'product.html',
					imgSrc: 'img/new_item_2.png',
					imgAlt: 'new_item_2',
					name: 'Lorem ipsum dolor sit',
					oldPrice: 69.99,
					newPrice: 34.99
        		},
        		{
        			id: 6,
        			href: 'product.html',
					imgSrc: 'img/new_item_3.png',
					imgAlt: 'new_item_3',
					name: 'Lorem ipsum dolor sit',
					oldPrice: 69.99,
					newPrice: 34.99
        		},
        	]
        }
    }

    componentDidMount() {
    	// setting the width of the product item container
    	let width = 0;
    	let $productBox = $( this.productBox );

		$productBox.children().each( function() {
			width += $( this ).outerWidth( true );
		} )

		$productBox.css( 'width', width );

    	// initializing IScroll
    	let scroll = new IScroll( this.scrollContainer, {
			scrollX: true,
			scrollY: false,
			indicators: {
				el: this.scrollbar,
				ignoreBoundaries: false,
				fade: false,
				interactive: true,
				listenX: true,
				listenY: false,
				resize: false
			}
		} );
    }

    render() {
        return (
        	<article className="new-products">
				<h2 className="new-products__header">New products</h2>
				<div className="new-products__content" ref={ ref => this.scrollContainer = ref }>
					<ul className="new-products__product-box" ref={ ref => this.productBox = ref }>

						{ this.state.items.map( item => {
							return (
								<ProductItem key={ item.id } mode="default" { ...item }/>
							);
						} ) }

					</ul>
					<div className="new-products__scrollbar-wrap">
						<div className="new-products__scrollbar" ref={ ref => this.scrollbar = ref }>
							<div className="new-products__handle">
								<span className="new-products__handle-content">&#124;&#124;&#124;</span>
							</div>
						</div>
					</div>
				</div>
			</article>
        );
    }

}

export default NewProducts;
