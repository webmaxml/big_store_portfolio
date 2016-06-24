// deps
import React from 'react';
import { Link } from 'react-router';

class Breadcrumbs extends React.Component {

    constructor(props) {
        super( props );
        this.state = {
            name: props.name
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({ name: nextProps.name });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on item state change
        return nextState.name === this.state.name ? false : true;
    }

    render() {
        return (
        	<ul className="breadcrumbs">
				<li className="breadcrumbs__item">
					<i className="fa fa-home breadcrumbs__icon-home"></i>
					<Link className="breadcrumbs__link" to="/" onlyActiveOnIndex={ true }>
						Products
					</Link>
				</li>
				<li className="breadcrumbs__item">
					<i className="fa fa-angle-double-right breadcrumbs__icon"></i>
					<span className="breadcrumbs__link breadcrumbs__link--active">
						{ this.state.name }
					</span>
				</li>
			</ul>
        );
    }

}

export default Breadcrumbs;
