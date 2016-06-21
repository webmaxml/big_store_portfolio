// deps
import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <a className="logo" href="#">
                <strong className="logo__strong">Big</strong>
                <small className="logo__small">Store</small>
            </a>
        );
    }

}

export default Logo;