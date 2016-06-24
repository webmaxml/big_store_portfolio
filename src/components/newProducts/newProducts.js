// deps
import React from 'react';
import IScroll from 'iscroll';
// components
import ProductItem from '../productItem/productItem';

class NewProducts extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: []
        };
    }

    componentDidMount() {
    	// fetching initial data
    	this.props.fetchItems();
    }

    componentWillReceiveProps( nextProps ) {
        // update only when items prop changes
        if ( nextProps.items === this.props.items ) { return; }

        let items = nextProps.items.map( item => {
            let obj = nextProps.productList[ item ];
            return {
                id: obj.id,
                imgSrc: obj.acf.image1.url,
                imgAlt: obj.acf.image1.alt,
                name: obj.acf.name,
                href: `product/${ obj.id }`,
                oldPrice: obj.acf.old_price,
                newPrice: obj.acf.new_price,
	            saleBadge: obj.acf.sale_badge
            }
        } );
        this.setState({ items });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on state change
        return nextState === this.state ? false : true;
    }

    componentDidUpdate() {
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
                                <li className="new-products__item-wrap" key={ item.id }>
								    <ProductItem mode="default" { ...item }/>
                                </li>
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
