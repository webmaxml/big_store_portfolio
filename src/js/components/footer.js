// deps
import React from 'react';
// components
import About from './about';
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
					<About />
				</div>
			</section>
        );
    }

}

export default Footer;
