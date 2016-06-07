// deps
import React from 'react';
// components
import TopSlider from './topSlider';
// containers

class Main extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <section className="main">
                <div className="main__wrap">
                    <TopSlider />
                </div>
            </section>
        );
    }

}

export default Main