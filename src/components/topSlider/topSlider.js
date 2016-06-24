// deps
import React from 'react';
import 'owlCarousel';
import { Link } from 'react-router';

class TopSlider extends React.Component {

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
                desc: obj.acf.short_desc,
                href: `/product/${ obj.id }`
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
            transitionStyle: 'fadeUp'
        });

        this.setState({ owlInit: true });
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
                                <Link className="top-slider__btn" to={ item.href }>
                                    <span className="top-slider__btn-text">Shop now</span>
                                    <i className="fa fa-arrow-right top-slider__btn-arrow"></i>
                                </Link>
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