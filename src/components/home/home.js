// deps
import React from 'react';
import { Link } from 'react-router';
// containers
import TopSliderContainer from '../topSlider/topSliderContainer';
import FeaturedSliderContainer from '../featuredSlider/featuredSliderContainer';
import NewProductsContainer from '../newProducts/newProductsContainer';
import TrendingContainer from '../trending/trendingContainer';

class Home extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <section className="home">
                <div className="home__wrap">
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