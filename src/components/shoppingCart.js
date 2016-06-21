// deps
import React from 'react';
// components
import ShoppingBasket from './shoppingBasket';

class ShoppingCart extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="shopping-cart">
                <div className="shopping-cart__label">Shopping Cart:</div>
                <div className="shopping-cart__amount">0</div>
                <div className="shopping-cart__label">item(s) - </div>
                <div className="shopping-cart__currency">$</div>
                <div className="shopping-cart__price">0.00</div>
                <button className="shopping-cart__toggle">
                    <i className="fa fa-caret-down shopping-cart__icon-closed"></i>
                    <i className="fa fa-caret-up shopping-cart__icon-opened"></i>
                </button>
                <ShoppingBasket />
            </div>
        );
    }

}

export default ShoppingCart