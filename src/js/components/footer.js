// deps
import React from 'react';
// components
// containers
import BrandSliderContainer from '../containers/brandSliderContainer';

class Footer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
        	<section className="footer">
				<div className="footer__wrap">
					<BrandSliderContainer />
				</div>
			</section>
        );
    }

}

export default Footer;
