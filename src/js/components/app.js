// deps
import React from 'react';
// components
import Header from './header';
import Main from './main';
import Footer from './footer';
// containers
import MobileMenuContainer from '../containers/mobileMenuContainer';

class App extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="app">
            	<Header />
            	<Main />
            	<Footer />
				<MobileMenuContainer />
            </div>
        );
    }

}

export default App;