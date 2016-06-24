// deps
import React from 'react';
// components
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

class ProductSection extends React.Component {

    constructor(props) {
        super( props );

        // check if current item is in productList
        let needToFetch = props.productList[ props.params.id ] ? false : true;
        let item = needToFetch ? {} : this.constructState( props.productList[ props.params.id ] );
        this.state = {
            item,
            needToFetch
        };
    }

    componentDidMount() {
        if ( this.state.needToFetch ) {
            this.props.fetchItem( this.props.params.id );
        }
    }

    componentWillReceiveProps( nextProps ) {
        // udate only on item prop change
        if ( nextProps.item.id === this.state.item.id ) { return; }

        let item = this.constructState( nextProps.item );
        this.setState({ item, needToFetch: false });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on item state change
        return nextState.item.id === this.state.item.id ? false : true;
    }

    /**
     * Constructs an item object
     *
     * @param {object} item full object
     * @returns {object} item object
     */

    constructState( item ) {
        return {
            id: item.id,
            name: item.acf.name
        }
    }

    render() {
        return (
            <section className="productSection">
                <div className="productSection__wrap">    
                    <Breadcrumbs name={ this.state.item.name } />
                </div>
            </section>
        );
    }

}

export default ProductSection;