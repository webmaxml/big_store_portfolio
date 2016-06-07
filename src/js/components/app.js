// deps
import React from 'react';
// components
import Header from './header';
import Main from './main';
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
				<MobileMenuContainer />
            </div>
        );
    }

}

export default App;