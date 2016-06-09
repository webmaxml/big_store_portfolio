// deps
import React from 'react';
import $ from 'jquery';
import 'owlCarousel';

class TopSlider extends React.Component {

    constructor(props) {
        super( props );
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
        // and when items are not updating ( productList update only )
        if ( nextProps.items.length === 0 || 
             nextProps.items === this.props.items ) { return; }

        let items = nextProps.items.map( item => {
            let obj = nextProps.productList[ item ];
            return {
                id: obj.id,
                imgSrc: obj.acf.image1.url,
                imgAlt: obj.acf.image1.alt,
                desc: obj.acf.short_desc,
                href: `/${ obj.id }`
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