// deps
import React from 'react';
import Isotope from 'isotope-layout';
import _ from 'underscore';
// components
import TrendingItem from '../trendingItem/trendingItem';

class Trending extends React.Component {

    constructor(props) {
        super( props );

        // check if we have to fetch items and
        // construct array of items object if we dont need to
        let needToFetch = props.items.length === 0 ? true : false;
        let items = needToFetch ? [] : this.constructState( props.items );

        this.state = {
            items,
            needToFetch,
            isotopeInit: false
        };

        this.navSwitching = this.navSwitching.bind( this );

        // arrange callback receives this as window
        // but we need to access the component object 
        this.itemArrange = _.partial( this.itemArrange, this );
    }

    componentDidMount() {
    	if ( this.state.needToFetch ) {
            this.props.fetchItems();          
        } else {
            this.initIsotope();
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
    	// check if isotope is already initialized
        if ( this.state.isotopeInit ) { return; }
        this.initIsotope();
    }

    // callback for arranging items
    itemArrange( self, item ) {
    	let activeFilter = self.$active.data( 'filter' );
		let itemFilter = $( item ).data( 'filter' );

		// returns true if current item has an active filter
		return ~itemFilter.indexOf( activeFilter ) ? true : false;
    }

    navSwitching( event ) {
    	// switching nav items
    	const $target = $( event.target );
		this.$active.removeClass( 'trending__nav-item--active' );
		this.$active = $target.addClass( 'trending__nav-item--active' );

		// arranging trending items
		this.iso.arrange( { filter: this.itemArrange } );
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
                desc: obj.acf.short_desc,
                filter: obj.acf.trending.join(' '),
                saleBadge: obj.acf.sale_badge
            }
        } );
    }

    /**
     * Initializes Isotope, updates the corresponding state
     */

    initIsotope() {
        // initiating an active nav item
        this.$active = $( this.nav ).children()
                                    .first()
                                    .addClass( 'trending__nav-item--active' );  
        // instantiating Isotope
        this.iso = new Isotope( this.grid, {
            itemSelector: '.trending-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.trending-item'
            },
            filter: this.itemArrange
        });

        this.setState({ isotopeInit: true });
    }

    render() {
        return (
        	<article className="trending">
				<div className="trending__menu">
					<h2 className="trending__header">Trending now</h2>
					<ul className="trending__nav" ref={ ref => this.nav = ref } onClick={ this.navSwitching }>
						<li className="trending__nav-item" data-filter="man">Man</li>
						<li className="trending__nav-item" data-filter="women">Women</li>
						<li className="trending__nav-item" data-filter="kids">Kids</li>
						<li className="trending__nav-item" data-filter="accessories">Accessories</li>
					</ul>
				</div>
				<ul className="trending__item-box" ref={ ref => this.grid = ref }>

					{ this.state.items.map( item => {
						return (
							<TrendingItem key={ item.id } { ...item } />
						);
					} ) }

				</ul>
			</article>
        );
    }

}

export default Trending;
