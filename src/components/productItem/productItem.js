// deps
import React from 'react';
// components
import BtnCart from '../btnCart/btnCart';
import SaleBadge from '../saleBadge/saleBadge';

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
			newPrice: props.newPrice,
			saleBadge: props.saleBadge
        }
    }

    render() {
    	let classes = 'product-item';
    	switch ( this.state.mode ) {
    		case 'related':
    			classes += ' product-item--related';
    			break;
    		case 'featured':
    			classes += ' product-item--featured';
    			break;
    	}

        return (
        	<div className={ classes }>
				<div className="product-item__img-line">
					<a className="product-item__img-link" href={ this.state.href }>
						<img className="product-item__img" src={ this.state.imgSrc } alt={ this.state.imgAlt } />
					</a>
					{ this.state.saleBadge ? <SaleBadge mode="default" /> : false }
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
								<span className="product-item__new-price">{ this.state.newPrice }</span>
							</div>
							{ this.state.oldPrice == 0 ? false :
								<div className="product-item__price-grouper">
									<div className="product-item__currency-grouper">
										<span className="product-item__old-currency">$</span>
									</div>
									<span className="product-item__old-price">{ this.state.oldPrice }</span>
								</div>
							}
						</div>
					</div>
					<div className="product-item__btn-grouper">
						<BtnCart mode="default" />
					</div>
				</div>
			</div>
        );
    }

}

export default ProductItem;
