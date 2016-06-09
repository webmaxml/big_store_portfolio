// deps
import React from 'react';
// components
import BtnCart from './btnCart';

class Trending extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: [
        		{
        			id: 1,
        			filter: 'women',
					href: 'product.html',
					imgSrc: 'img/man_1.png',
					imgAlt: 'trending-item',
					name: 'Shop t-shirt',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},
        		{
        			id: 2,
        			filter: 'women accessories',
					href: 'product.html',
					imgSrc: 'img/man_1.png',
					imgAlt: 'trending-item',
					name: 'Shop t-shirt',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},
        		{
        			id: 3,
        			filter: 'women',
					href: 'product.html',
					imgSrc: 'img/man_1.png',
					imgAlt: 'trending-item',
					name: 'Shop t-shirt',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},
        		{
        			id: 4,
        			filter: 'man accessories',
					href: 'product.html',
					imgSrc: 'img/man_2.png',
					imgAlt: 'trending-item',
					name: 'Sneaker',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},
        		{
        			id: 5,
        			filter: 'man accessories',
					href: 'product.html',
					imgSrc: 'img/man_2.png',
					imgAlt: 'trending-item',
					name: 'Sneaker',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},
        		{
        			id: 6,
        			filter: 'man',
					href: 'product.html',
					imgSrc: 'img/man_2.png',
					imgAlt: 'trending-item',
					name: 'Sneaker',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},
        		{
        			id: 7,
        			filter: 'kids accessories',
					href: 'product.html',
					imgSrc: 'img/man_3.png',
					imgAlt: 'trending-item',
					name: 'Backpack',
					desc: 'Lorem ipsum dolor sit amet, consectetur.',
					newPrice: 34.99,
					oldPrice: 69.99
        		},

        	]
        }
    }

    render() {
        return (
        	<article className="trending">
				<div className="trending__menu">
					<h2 className="trending__header">Trending now></h2>
					<ul className="trending__nav">
						<li className="trending__nav-item" data-filter="man">Man</li>
						<li className="trending__nav-item" data-filter="women">Women</li>
						<li className="trending__nav-item" data-filter="kids">Kids</li>
						<li className="trending__nav-item" data-filter="accessories">Accessories</li>
					</ul>
				</div>
				<ul className="trending__item-box">

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
										<span className="trending-item__currency">$</span>
										<span className="trending-item__old-value">{ item.oldPrice }</span>
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
