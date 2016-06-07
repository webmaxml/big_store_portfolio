// deps
import React from 'react';
import $ from 'jquery';
import 'owlCarousel';

class TopSlider extends React.Component {

    constructor(props) {
        super( props );
        this.state = {
            items: [
                {
                    id: 1,
                    imgSrc: 'img/slider_item.png',
                    imgAlt: 'slider_item',
                    desc: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum',
                    href: 'product.html'  
                },
                {   
                    id: 2,
                    imgSrc: 'img/slider_item.png',
                    imgAlt: 'slider_item',
                    desc: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum',
                    href: 'product.html'  
                },
                {   
                    id: 3,
                    imgSrc: 'img/slider_item.png',
                    imgAlt: 'slider_item',
                    desc: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum',
                    href: 'product.html'  
                },
                {   
                    id: 4,
                    imgSrc: 'img/slider_item.png',
                    imgAlt: 'slider_item',
                    desc: 'Fusce ultrices ornare velit, consectetur tempus eros dapibus et. Integer lobortis, dui in iaculis sollicitudin, felis nunc aliquam nibh, eu porta nisi urna nec odio. Duis suscipit viverra magna id sagittis. Quisque odio neque, condimentum cursus volutpat vel, pharetra ac nibh. Cras cursus libero id nunc facilisis luctus. Aenean ultricies, risus cursus sollicitudin congue, diam diam congue velit, ut sodales sem enim a nisl. Aenean elit diam, mollis fermentum',
                    href: 'product.html'  
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
            transitionStyle: 'fadeUp'
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
            <div className="top-slider__wrap">
                <div className="top-slider owl-carousel" ref={ ref => this.owlContainer = ref }>

                { this.state.items.map( item => {
                    return (
                        <div className="top-slider__item" key={ item.id }>
                            <div className="top-slider__img-box">
                                <img className="top-slider__img" src={ item.imgSrc } alt={ item.imgAlt } />
                            </div>
                            <div className="top-slider__info-box">
                                <h1 className="top-slider__header">Where can I get some</h1>
                                <p className="top-slider__text">{ item.desc }</p>
                                <a className="top-slider__btn" href={ item.href }>
                                    <span className="top-slider__btn-text">Shop now</span>
                                    <i className="fa fa-arrow-right top-slider__btn-arrow"></i>
                                </a>
                            </div>
                        </div>
                    );
                } ) }

                </div>
                <button className="top-slider__btn-prev" type="button" onClick={ this.movePrev }>
                    <i className="fa fa-angle-left top-slider__icon-prev"></i>
                </button>
                <button className="top-slider__btn-next" type="button" onClick={ this.moveNext }>
                    <i className="fa fa-angle-right top-slider__icon-next"></i>
                </button>
            </div>
        );
    }

}

export default TopSlider