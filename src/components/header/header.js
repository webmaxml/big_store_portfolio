// deps
import React from 'react';
// components
import SocialNav from '../socialNav/socialNav';
import MainNav from '../mainNav/mainNav';
import Logo from '../logo/logo';
import ShoppingCart from '../shoppingCart/shoppingCart';
// containers
import MobileToggleContainer from '../../containers/mobileToggleContainer';
import NewsFeedContainer from '../../containers/newsFeedContainer';


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
                <article className="header__news">
                    <div className="header__wrap">
                        <NewsFeedContainer />
                        <ShoppingCart />
                    </div>
                </article>
            </header>
        );
    }

}

export default Header