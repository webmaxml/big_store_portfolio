// deps
import React from 'react';
import $ from 'jquery';
import 'owlCarousel';

class brandSlider extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: [
        		{
        			id: 1,
        			href: '#',
        			imgSrc: 'img/brand_1.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 2,
        			href: '#',
        			imgSrc: 'img/brand_2.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 3,
        			href: '#',
        			imgSrc: 'img/brand_3.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 4,
        			href: '#',
        			imgSrc: 'img/brand_1.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 5,
        			href: '#',
        			imgSrc: 'img/brand_2.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 6,
        			href: '#',
        			imgSrc: 'img/brand_3.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 7,
        			href: '#',
        			imgSrc: 'img/brand_1.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 8,
        			href: '#',
        			imgSrc: 'img/brand_2.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 9,
        			href: '#',
        			imgSrc: 'img/brand_3.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 10,
        			href: '#',
        			imgSrc: 'img/brand_1.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 11,
        			href: '#',
        			imgSrc: 'img/brand_2.png',
        			imgAlt: 'brand_item'
        		},
        		{
        			id: 12,
        			href: '#',
        			imgSrc: 'img/brand_3.png',
        			imgAlt: 'brand_item'
        		},
        	]
        };

        this.movePrev = this.movePrev.bind( this );
        this.moveNext = this.moveNext.bind( this );
    }

    componentDidMount() {
    	this.$owlContainer = $( this.owlContainer );

    	this.$owlContainer.owlCarousel({
			itemsCustom: [ [0, 1], [540, 2], [780, 3], [1150, 4] ],
			pagination: false,
		});
    }

    movePrev() {
    	this.$owlContainer.trigger( 'owl.prev' );
    }

    moveNext() {
    	this.$owlContainer.trigger( 'owl.next' );
    }

    render() {
        return (
        	<div className="brand-slider__wrap">
				<button className="brand-slider__btn-prev" type="button" onClick={ this.movePrev }>
					<i className="fa fa-angle-left brand-slider__icon-prev"></i>
				</button>
				<article className="brand-slider owl-carousel" ref={ ref => this.owlContainer = ref }>

					{ this.state.items.map( item => {
						return(
							<div className="brand-slider__item" key={ item.id }>
								<a className="brand-slider__link" href={ item.href }>
									<img className="brand-slider__img" src={ item.imgSrc } alt={ item.imgAlt } />
								</a>
							</div>
						);
					} ) }
					
				</article>
				<button className="brand-slider__btn-next" type="button" onClick={ this.moveNext }>
					<i className="fa fa-angle-right brand-slider__icon-next"></i>
				</button>
			</div>
        );
    }

}

export default brandSlider;
