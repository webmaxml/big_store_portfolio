// deps
import React from 'react';
// components
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

class ProductSection extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: +props.params.id
        };
    }

    render() {
        return (
            <section className="productSection">
                <div className="productSection__wrap">    
                    <Breadcrumbs { ...this.state } />
                </div>
            </section>
        );
    }

}

export default ProductSection;