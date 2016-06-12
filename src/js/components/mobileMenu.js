// deps
import React from 'react';
import _ from 'underscore';
// components
import SocialNav from './socialNav';
import MainNav from './mainNav';

class mobileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.menuState === 'open' ? { open: true } : 
                                                  { open: false };
    	this.throttledResize = _.throttle( this.handleResize.bind( this ), 300 );                                              
    }

    componentDidMount() {
    	window.addEventListener( 'resize', this.throttledResize );
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.menuState === 'open' ) {
            this.setState({ open: true });
        } else {
            this.setState({ open: false });
        }
    }

    componentWillUnmount() {
    	window.removeEventListener( 'resize', this.throttledResize );
    }

    handleResize() {
    	if ( window.innerWidth < 990 ) { return; }

    	// force close mobile menu after 990px
    	this.props.closeMenu();
    }

    animate() {
    	// for the initial render
    	if ( !this._menu ) { return }
    	if ( this.state.open ) {		
            this._menu.style.width = '100%';
            this._menu.style.opacity = 1;
    	} else {
            this._menu.style.width = '0%';
            this._menu.style.opacity = 0;
    	}
    	  
    }

    render() {
    	this.animate();
        return (
            <div className="mobile-menu" ref={ ref => this._menu = ref }>
                <div className="mobile-menu__wrap">
            		<SocialNav />
            		<MainNav />
                </div>
	        </div>
        );
    }

}

export default mobileMenu;