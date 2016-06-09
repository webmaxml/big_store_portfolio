// deps
import React from 'react';
// components
import BtnCart from './btnCart';

class ProductItem extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	mode: props.mode,
        	id: props.id,
			href: props.href,
			imgSrc: props.imgSrc,
			imgAlt: props.imgAlt,
			name: props.name,
			oldPrice: props.oldPrice,
			newPrice: props.newPrice
        }
    }

    render() {
    	let classes = 'product-item';
    	switch ( this.state.mode ) {
    		case 'related':
    			classes += ' product-item--related';
    			break;
    	}

        return (
        	<li className={ classes }>
				<div className="product-item__img-line">
					<a className="product-item__img-link" href={ this.state.href }>
						<img className="product-item__img" src={ this.state.imgSrc } alt={ this.state.imgAlt } />
					</a>
				</div>
				<div className="product-item__info-line">
					<div className="product-item__about-grouper">
						<h3 className="product-item__name-line">
							<a className="product-item__name" href={ this.state.href }>{ this.state.name }</a>
						</h3>
						<div className="product-item__price-line">
							<div className="product-item__price-grouper">
								<div className="product-item__currency-grouper">
									<span className="product-item__new-currency">$</span>
								</div>
								<span className="product-item__new-price">{ this.state.oldPrice }</span>
							</div>
							<div className="product-item__price-grouper">
								<div className="product-item__currency-grouper">
									<span className="product-item__old-currency">$</span>
								</div>
								<span className="product-item__old-price">{ this.state.newPrice }</span>
							</div>
						</div>
					</div>
					<BtnCart mode="default" />
				</div>
			</li>
        );
    }

}

export default ProductItem;
