import React from 'react';

import Header from './header';
import MobileMenuContainer from '../containers/mobileMenuContainer';

class App extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="app">
            	<Header />
				<MobileMenuContainer />
            </div>
        );
    }

}

export default App;