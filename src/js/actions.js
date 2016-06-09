// deps
import fetch from 'isomorphic-fetch';


/**
 * Mobile menu
 ************************/

export const MOBILE_MENU_TOGGLE = 'MOBILE_MENU_TOGGLE';
export function mobileMenuToggle( forceClose = false ) {
	return {
		type: MOBILE_MENU_TOGGLE,
		forceClose: forceClose
	};
};


/**
 * News
 ************************/

// requesting news item
export const REQUEST_NEWS = 'REQUEST_NEWS';
export function requestNews() {
	return {
		type: REQUEST_NEWS,
	};
};

// receiving news item
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export function receiveNews( json ) {
	return {
		type: RECEIVE_NEWS,
		json
	};
};

// requesting and receiving news item
export function fetchNews() {
	return function( dispatch, getState, api ) {
		dispatch( requestNews() );

		return fetch( api + '/news/90' )
			   .then( response => response.json() )
			   .then( json => dispatch( receiveNews( json ) ) )
	};
};


/**
 * Products
 ************************/

 // receiving product items
export const RECEIVE_PRODUCT_ITEMS = 'RECEIVE_PRODUCT_ITEMS';
export function receiveProducts( json ) {
	return {
		type: RECEIVE_PRODUCT_ITEMS,
		json
	};
};


/**
 * Top slider
 ************************/

 // requesting slider item
export const REQUEST_TOP_SLIDER_ITEMS = 'REQUEST_TOP_SLIDER_ITEMS';
export function requestTopSlider() {
	return {
		type: REQUEST_TOP_SLIDER_ITEMS,
	};
};

// receiving slider items
export const RECEIVE_TOP_SLIDER_ITEMS = 'RECEIVE_TOP_SLIDER_ITEMS';
export function receiveTopSlider( json ) {
	return {
		type: RECEIVE_TOP_SLIDER_ITEMS,
		json
	};
};

// requesting and receiving slider items
export function fetchTopSlider() {
	return function( dispatch, getState, api ) {
		dispatch( requestTopSlider() );

		const query = `/products?filter[posts_per_page]=-1&
								 filter[meta_query][0][key]=top_slider&
								 filter[meta_query][0][value]=1`;

		return fetch( api + query )
			   .then( response => response.json() )
			   // update product List
			   .then( json => dispatch( receiveProducts( json ) ) )
			   // update top-slider items
			   .then( prevAction => dispatch( receiveTopSlider( prevAction.json ) ) )
	};
};


/**
 * Featured slider
 ************************/

 // requesting slider item
export const REQUEST_FEATURED_SLIDER_ITEMS = 'REQUEST_FEATURED_SLIDER_ITEMS';
export function requestFeaturedSlider() {
	return {
		type: REQUEST_FEATURED_SLIDER_ITEMS,
	};
};

// receiving slider items
export const RECEIVE_FEATURED_SLIDER_ITEMS = 'RECEIVE_FEATURED_SLIDER_ITEMS';
export function receiveFeaturedSlider( json ) {
	return {
		type: RECEIVE_FEATURED_SLIDER_ITEMS,
		json
	};
};

// requesting and receiving slider items
export function fetchFeaturedSlider() {
	return function( dispatch, getState, api ) {
		dispatch( requestFeaturedSlider() );

		const query = `/products?filter[posts_per_page]=-1&
								 filter[meta_query][0][key]=featured&
								 filter[meta_query][0][value]=1`;

		return fetch( api + query )
			   .then( response => response.json() )
			   // update product List
			   .then( json => dispatch( receiveProducts( json ) ) )
			   // update featured-slider items
			   .then( prevAction => dispatch( receiveFeaturedSlider( prevAction.json ) ) )
	};
};