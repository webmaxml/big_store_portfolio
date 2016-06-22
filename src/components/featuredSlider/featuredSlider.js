// deps
import React from 'react';
import 'owlCarousel';
// components
import BtnCart from '../btnCart/btnCart';
import ProductItem from '../productItem/productItem';

class FeaturedSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	items: []
        };
        this.movePrev = this.movePrev.bind( this );
        this.moveNext = this.moveNext.bind( this );
    }

    componentDidMount() {
        this.props.fetchItems();
        this.$owlContainer = $( this.owlContainer );
    }

    componentWillReceiveProps( nextProps ) {
        // for products initial updating, when props.items are empty
        // or when items are not updating ( productList update only )
        if ( nextProps.items.length === 0 || 
             nextProps.items === this.props.items ) { return; }

        let items = nextProps.items.map( item => {
            let obj = nextProps.productList[ item ];
            return {
                id: obj.id,
                imgSrc: obj.acf.image1.url,
                imgAlt: obj.acf.image1.alt,
                name: obj.acf.name,
                href: `/${ obj.id }`,
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
        this.$owlContainer.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'backSlide'
		});
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