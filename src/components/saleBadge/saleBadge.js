import React from 'react';

class SaleBadge extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	mode: props.mode
        };
    }

    render() {
    	let classes, children;
    	switch ( this.state.mode ) {
    		case 'trending':
    			classes = 'sale-badge sale-badge--trending';
    			children = false;
    			break;
    		default:
    			classes = 'sale-badge';
    			children = [ <div className="sale-badge__back-left" key={0}></div>,
    						 <div className="sale-badge__back-right" key={1}></div> ];
    			break;
    	};

        return (
        	<div className={ classes }> Sale
        		{ children }
        	</div>
        );
    }

}

export default SaleBadge;
