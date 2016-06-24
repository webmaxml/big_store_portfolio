// deps
import React from 'react';
import 'owlCarousel';
// components
import BtnCart from '../btnCart/btnCart';
import ProductItem from '../productItem/productItem';

class FeaturedSlider extends React.Component {

    constructor(props) {
        super( props );

        // check if we have to fetch items and
        // construct array of items object if we dont need to
        let needToFetch = props.items.length === 0 ? true : false;
        let items = needToFetch ? [] : this.constructState( props.items );

        this.state = {
        	items,
            needToFetch,
            owlInit: false
        };

        this.movePrev = this.movePrev.bind( this );
        this.moveNext = this.moveNext.bind( this );
    }

    componentDidMount() {
        if ( this.state.needToFetch ) {
            this.props.fetchItems();          
        } else {
            this.initCarousel();
        }
    }

    componentWillReceiveProps( nextProps ) {
        // update only when items prop changes
        if ( nextProps.items === this.props.items ) { return; }

        let items = this.constructState( nextProps.items );
        this.setState({ items: items, needToFetch: false });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on items state change
        return nextState.items === this.state.items ? false : true;
    }

    componentDidUpdate() {
        // check if carousel is already initialized
        if ( this.state.owlInit ) { return; }
        this.initCarousel();
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
     * Initializes owl carousel and updates the corresponding state
     */

    initCarousel() {
        this.$owlContainer = $( this.owlContainer );
        this.$owlContainer.owlCarousel({
            singleItem: true,
            pagination: false,
            mouseDrag: false,
            transitionStyle: 'backSlide'
        });

        this.setState({ owlInit: true });
    }

    movePrev( event ) {
        this.$owlContainer.trigger( 'owl.prev' );
    }

    moveNext( event ) {
        this.$owlContainer.trigger( 'owl.next' );
    }

    render() {
        return (
        	<article className="featured">
				<h2 className="featured__header">
					<span className="featured__header-text">Featured</span>
					<button className="featured__btn-next" type="button" onClick={ this.moveNext }>
						<i className="fa fa-chevron-right featured__header-icon"></i>
					</button>
					<button className="featured__btn-prev" type="button" onClick={ this.movePrev }>
						<i className="fa fa-chevron-left featured__header-icon"></i>
					</button>
				</h2>
				<ul className="featured__content owl-carousel" ref={ ref => this.owlContainer = ref }>

					{ this.state.items.map( item => {
						return (
							<li className="featured__item" key={ item.id }>
                                <ProductItem mode="featured" { ...item }/>
							</li>
						);
					} ) }

				</ul>
			</article>
        );
    }

}

export default FeaturedSlider;