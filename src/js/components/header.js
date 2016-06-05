import React from 'react';
import { connect } from 'react-redux';
import ReactTransitionGroup from 'react-addons-transition-group';

import SocialNav from './socialNav';
import MainNav from './mainNav';
import MobileToggleContainer from '../containers/mobileToggleContainer';
import Logo from './logo';

class Header extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <header className="header">
            	<article className="header__nav">
	                <div className="header__wrap">
	                	<div className="header__menu">
                            <SocialNav />
                            <MainNav />
                        </div>
	                	<MobileToggleContainer />
	                	<Logo />
	                </div>
                </article>
            </header>
        );
    }

}

export default Header