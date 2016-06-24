// deps
import React from 'react';
// components
import Header from '../header/header';
import Footer from '../footer/footer';
// containers
import MobileMenuContainer from '../mobileMenu/mobileMenuContainer';

class App extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="app">
            	<Header />
            	{ this.props.children }
            	<Footer />
				<MobileMenuContainer />
            </div>
        );
    }

}

export default App;