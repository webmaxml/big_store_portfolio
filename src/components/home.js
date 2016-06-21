// deps
import React from 'react';
import { Link } from 'react-router';
// containers
import TopSliderContainer from '../containers/topSliderContainer';
import FeaturedSliderContainer from '../containers/featuredSliderContainer';
import NewProductsContainer from '../containers/newProductsContainer';
import TrendingContainer from '../containers/trendingContainer';

class Home extends React.Component {

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
                    <TrendingContainer />
                </div>
            </section>
        );
    }

}

export default Home;