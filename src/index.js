// entries
import './jade/index.jade';
import './sass/index.scss';
// deps
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// reducers
import rootReducer from './reducers/index';
// components
import App from './components/app/app';
import Home from './components/home/home';
import ProductSection from './components/productSection/productSection';

const api = 'http://api.webmaxml.ru/wp-json/wp/v2';

let store = createStore( 
	rootReducer,
	applyMiddleware( thunk.withExtraArgument( api ) )
);

render( 
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				<IndexRoute component={ Home } />
				<Route path="/product/:id" component={ ProductSection } />
			</Route>
		</Router>
	</Provider>, 
	document.getElementById( 'appRoot' )
);

