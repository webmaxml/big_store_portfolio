import React from 'react';
import TweenMax from 'gsap';
import _ from 'underscore';

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
    		TweenMax.fromTo( this._menu , 0.2, {opacity:0}, {opacity:1,display:'block'} )
    	} else {
    		TweenMax.fromTo( this._menu , 0.2, {opacity:1,display:'block'}, {opacity:0} )
    	}
    	  
    }

    render() {
    	this.animate();
        return (
            <div className="mobile-menu" ref={ ref => this._menu = ref }>
        		<SocialNav />
        		<MainNav />
	        </div>
        );
    }

}

export default mobileMenu;