// deps
import React from 'react';

class BtnCart extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	mode: props.mode
        }
    }

    render() {
    	let classes = 'btn-cart';
    	let children = [ 
    		<i className="fa fa-shopping-cart btn-cart__icon" key={0}></i> 
    	];

    	switch ( this.state.mode ) {
    		case 'trending':
    			classes += ' btn-cart--trending';
    			children.push( <span className="btn-cart__text" key={1}>Add to cart</span> )
    			break;
    		case 'tech-form':
    			classes += ' btn-cart--tech-form';
    			children.push( <span className="btn-cart__text" key={1}>Add to cart</span> )
    			break;
    	};		

        return (
        	<button className={ classes }>
        		{ children }
        	</button>
        );
    }

}

export default BtnCart;
