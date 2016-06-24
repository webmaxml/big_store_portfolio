// deps
import React from 'react';
import IScroll from 'iscroll';
// components
import ProductItem from '../productItem/productItem';

class NewProducts extends React.Component {

    constructor(props) {
        super( props );

        // check if we have to fetch items and
        // construct array of items object if we dont need to
        let needToFetch = props.items.length === 0 ? true : false;
        let items = needToFetch ? [] : this.constructState( props.items );

        this.state = {
            items,
            needToFetch,
            scrollInit: false
        };
    }

    componentDidMount() {
    	if ( this.state.needToFetch ) {
            this.props.fetchItems();          
        } else {
            this.initScroll();
        }
    }

    componentWillReceiveProps( nextProps ) {
        // update only when items prop changes
        console.log( 'receiving' );
        if ( nextProps.items === this.props.items ) { return; }

        let items = this.constructState( nextProps.items );
        console.log( 'updating' );
        this.setState({ items: items, needToFetch: false });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on items state change
        return nextState.items === this.state.items ? false : true;
    }

    componentDidUpdate() {
        // check if IScroll is already initialized
        if ( this.state.scrollInit ) { return; }
        this.initScroll();
    }

    /**
     * Constructs an array of item objects
     *
     * @param {array} items Array of item id's
     * @returns {array} array of item objects
     */

    constructState( items ) {
        return items.map( item => {
            let obj = this.props.productList[ item ];
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
    }

    /**
     * Sets and initializes IScroll
     */

    initScroll() {
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
        console.log( 'render' );
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
