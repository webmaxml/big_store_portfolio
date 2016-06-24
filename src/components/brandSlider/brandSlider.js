// deps
import React from 'react';
import 'owlCarousel';

class brandSlider extends React.Component {

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
            return {
                id: item.id,
                imgSrc: item.acf.image.url,
                imgAlt: item.acf.image.alt,
                href: item.acf.href
            }
        } );
    }

    /**
     * Initializes owl carousel and updates the corresponding state
     */

    initCarousel() {
        this.$owlContainer = $( this.owlContainer );
        this.$owlContainer.owlCarousel({
            itemsCustom: [ [0, 1], [540, 2], [780, 3], [1150, 4] ],
            pagination: false,
        });

        this.setState({ owlInit: true });
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
