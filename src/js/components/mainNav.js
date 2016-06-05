import React from 'react';

class MainNav extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <ul className="main-nav">

                <li className="main-nav__item">
                    <a className="main-nav__link" href="#">Entertainment</a>
                </li>

                <li className="main-nav__item">
                    <a className="main-nav__link" href="#">Lifestyle</a>
                </li>

                <li className="main-nav__item">
                    <a className="main-nav__link" href="#">Technology</a>
                </li>

                <li className="main-nav__item">
                    <a className="main-nav__link" href="#">Entertainment</a>
                </li>

                <li className="main-nav__item">
                    <a className="main-nav__link" href="#">Lifestyle</a>
                </li>

                <li className="main-nav__item main-nav__item--last">
                    <a className="main-nav__link" href="#">Sports</a>
                </li>

            </ul>
        );
    }

}

export default MainNav;