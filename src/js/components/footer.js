// deps
import React from 'react';
// components
import BrandSlider from './brandSlider';

class Footer extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
        	<section className="footer">
				<div className="footer__wrap">
					<BrandSlider />
				</div>
			</section>
        );
    }

}

export default Footer;
