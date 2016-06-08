// deps
import React from 'react';
// components
// containers
import TopSliderContainer from '../containers/topSliderContainer';

class Main extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <section className="main">
                <div className="main__wrap">
                    <TopSliderContainer />
                </div>
            </section>
        );
    }

}

export default Main