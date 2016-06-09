// deps
import React from 'react';
// components
import Trending from './trending';
// containers
import TopSliderContainer from '../containers/topSliderContainer';
import FeaturedSliderContainer from '../containers/featuredSliderContainer';
import NewProductsContainer from '../containers/newProductsContainer';

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
                    <NewProductsContainer />
                    <Trending />
                </div>
            </section>
        );
    }

}

export default Main