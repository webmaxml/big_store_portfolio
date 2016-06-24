// deps
import React from 'react';
import { Link } from 'react-router';

class Breadcrumbs extends React.Component {

    constructor(props) {
        super();
        this.state = {
            
        };
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
						Lorem Ipsum
					</span>
				</li>
			</ul>
        );
    }

}

export default Breadcrumbs;
