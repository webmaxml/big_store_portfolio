// deps
import React from 'react';
// components
// containers
import TopSliderContainer from '../containers/topSliderContainer';
import FeaturedSliderContainer from '../containers/featuredSliderContainer';

class Main extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <section className="main">
                <div className="main__wrap">
                    <TopSliderContainer />
                    <FeaturedSliderContainer />
                </div>
            </section>
        );
    }

}

export default Main