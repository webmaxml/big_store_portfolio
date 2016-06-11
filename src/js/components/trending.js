// deps
import React from 'react';
import $ from 'jquery';
import Isotope from 'isotope-layout';
import _ from 'underscore';
// components
import BtnCart from './btnCart';

class Trending extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: []
        };

        this.navSwitching = this.navSwitching.bind( this );

        // arrange callback receives every item as 'this'
        // but we also need an access to the component object 
        this.itemArrange = _.partial( this.itemArrange, this );
    }

    componentDidMount() {
    	// fetching initial data
    	this.props.fetchItems();
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
	            desc: obj.acf.short_desc,
	            filter: obj.acf.trending.join(' ')
            }
        } );
        this.setState({ items });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on state change
        return nextState === this.state ? false : true;
    }

    componentDidUpdate() {
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
    }

    // callback for arranging items
    itemArrange( self ) {
    	let activeFilter = self.$active.data( 'filter' );
		let itemFilter = $( this ).data( 'filter' );

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
							<li className="trending-item" data-filter={ item.filter } key={ item.id }>
								<div className="trending-item__img-box">
									<a className="trending-item__link" href={ item.href }>
										<img className="trending-item__img" src={ item.imgSrc } alt={ item.imgAlt } />
									</a>
								</div>
								<div className="trending-item__info">
									<h3 className="trending-item__item-name"> 
										<a className="trending-item__link" href={ item.href }>{ item.name }</a>
									</h3>
									<p className="trending-item__item-text">{ item.desc }</p>
									<div className="trending-item__current-price">
										<span className="trending-item__currency">$</span>
										<span className="trending-item__current-value">{ item.newPrice }</span>
									</div>
									<div className="trending-item__old-price">
										<span className="trending-item__currency">
											{ item.oldPrice == 0 ? false : $ }
										</span>
										<span className="trending-item__old-value">
											{ item.oldPrice == 0 ? false : item.oldPrice }
										</span>
									</div>
									<BtnCart mode="trending" />
								</div>
							</li>
						);
					} ) }

				</ul>
			</article>
        );
    }

}

export default Trending;
