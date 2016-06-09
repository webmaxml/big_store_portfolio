// deps
import React from 'react';
import $ from 'jquery';
import 'owlCarousel';
// components
import BtnCart from './btnCart';

class FeaturedSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	items: [
        		{
        			id: 1,
	                imgSrc: "img/featured_item.jpg",
	                imgAlt: "featured_item",
	                name: "Herbal Sport",
	                href: '/1',
	                oldPrice: 69.99,
	                newPrice: 101.88
        		},
        		{
        			id: 2,
	                imgSrc: "img/featured_item.jpg",
	                imgAlt: "featured_item",
	                name: "Herbal Sport",
	                href: '/1',
	                oldPrice: 69.99,
	                newPrice: 101.88
        		},
        		{
        			id: 3,
	                imgSrc: "img/featured_item.jpg",
	                imgAlt: "featured_item",
	                name: "Herbal Sport",
	                href: '/1',
	                oldPrice: 69.99,
	                newPrice: 101.88
        		},
        	]
        };
        this.movePrev = this.movePrev.bind( this );
        this.moveNext = this.moveNext.bind( this );
    }

    componentDidMount() {
        this.$owlContainer = $( this.owlContainer );

        this.$owlContainer.owlCarousel({
			singleItem: true,
			pagination: false,
			mouseDrag: false,
			transitionStyle: 'backSlide'
		});

    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on state change
        return nextState === this.state ? false : true;
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
								<a className="featured__link" href={ item.href }>
									<img className="featured__img" src={ item.imgSrc } alt={ item.imgAlt } />
								</a>
								<div className="featured__info">
									<div className="featured__about">
										<h3 className="featured__item-name"> 
											<a className="featured__link" href="product.html">{ item.name }</a>
										</h3>
										<div className="featured__current-price">
											<span className="featured__currency">$</span>
											<span className="featured__current-value">{ item.newPrice }</span>
										</div>
										<div className="featured__old-price">
											<span className="featured__currency">$</span>
											<span className="featured__old-value">{ item.oldPrice }</span>
										</div>
									</div>
									<BtnCart mode="default" />
								</div>
							</li>
						);
					} ) }

				</ul>
			</article>
        );
    }

}

export default FeaturedSlider;
