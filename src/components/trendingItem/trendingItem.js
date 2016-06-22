// deps
import React from 'react';
// components
import BtnCart from '../btnCart/btnCart';
import SaleBadge from '../saleBadge/saleBadge';

class TrendingItem extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	id: props.id,
            imgSrc: props.imgSrc,
            imgAlt: props.imgAlt,
            name: props.name,
            href: props.href,
            oldPrice: props.oldPrice,
            newPrice: props.newPrice,
            desc: props.desc,
            filter: props.filter,
            saleBadge: props.saleBadge
        }
    }

    render() {
		return (
			<li className="trending-item" data-filter={ this.state.filter }>
				<div className="trending-item__img-box">
					<a className="trending-item__link" href={ this.state.href }>
						<img className="trending-item__img" src={ this.state.imgSrc } alt={ this.state.imgAlt } />
					</a>
				</div>
				<div className="trending-item__info">
					<h3 className="trending-item__item-name"> 
						<a className="trending-item__link" href={ this.state.href }>{ this.state.name }</a>
					</h3>
					<p className="trending-item__item-text">{ this.state.desc }</p>
					<div className="trending-item__current-price">
						<span className="trending-item__currency">$</span>
						<span className="trending-item__current-value">{ this.state.newPrice }</span>
					</div>
					{ this.state.oldPrice == 0 ? false :
						<div className="trending-item__old-price">
							<span className="trending-item__currency">$</span>
							<span className="trending-item__old-value">{ this.state.oldPrice }</span>
						</div>
					}
					<BtnCart mode="trending" />
				</div>
				{ this.state.saleBadge ? <SaleBadge mode="trending" /> : false }
			</li>
		);
    }

}

export default TrendingItem;