// deps
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers
import rootReducer from './reducers/index';
// components
import App from './components/app';

const api = 'http://api.webmaxml.ru/wp-json/wp/v2';

let store = createStore( 
	rootReducer,
	applyMiddleware( thunk.withExtraArgument( api ) )
);

render( 
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById( 'appRoot' )
);