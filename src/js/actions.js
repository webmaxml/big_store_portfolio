// deps
import fetch from 'isomorphic-fetch';

export const MOBILE_MENU_TOGGLE = 'MOBILE_MENU_TOGGLE';
export function mobileMenuToggle( forceClose = false ) {
	return {
		type: MOBILE_MENU_TOGGLE,
		forceClose: forceClose
	};
};

export const REQUEST_NEWS = 'REQUEST_NEWS';
export function requestNews() {
	return {
		type: REQUEST_NEWS,
	};
};

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export function receiveNews( json ) {
	return {
		type: RECEIVE_NEWS,
		json
	};
};

export function fetchNews() {
	return function( dispatch, getState, api ) {
		dispatch( requestNews() );

		return fetch( api + '/news/90' )
			   .then( response => response.json() )
			   .then( json => dispatch( receiveNews( json ) ) )
	};
};