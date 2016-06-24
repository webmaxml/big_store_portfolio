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

/**
 * New Products
 ************************/

 // requesting new products
export const REQUEST_NEW_PRODUCTS = 'REQUEST_NEW_PRODUCTS';
export function requestNewProducts() {
	return {
		type: REQUEST_NEW_PRODUCTS,
	};
};

// receiving new products
export const RECEIVE_NEW_PRODUCTS = 'RECEIVE_NEW_PRODUCTS';
export function receiveNewProducts( json ) {
	return {
		type: RECEIVE_NEW_PRODUCTS,
		json
	};
};

// requesting and receiving new products
export function fetchNewProducts() {
	return function( dispatch, getState, api ) {
		dispatch( requestNewProducts() );

		const query = `/products?filter[posts_per_page]=-1&
								 filter[meta_query][0][key]=new_products&
								 filter[meta_query][0][value]=1`;

		return fetch( api + query )
			   .then( response => response.json() )
			   // update product List
			   .then( json => dispatch( receiveProducts( json ) ) )
			   // update new products
			   .then( prevAction => dispatch( receiveNewProducts( prevAction.json ) ) )
	};
};

/**
 * Trending
 ************************/

 // requesting trending products
export const REQUEST_TRENDING = 'REQUEST_TRENDING';
export function requestTrending() {
	return {
		type: REQUEST_TRENDING,
	};
};

// receiving trending products
export const RECEIVE_TRENDING = 'RECEIVE_TRENDING';
export function receiveTrending( json ) {
	return {
		type: RECEIVE_TRENDING,
		json
	};
};

// requesting and receiving trending products
export function fetchTrending() {
	return function( dispatch, getState, api ) {
		dispatch( requestTrending() );

		const query = `/products?filter[posts_per_page]=-1&
								 filter[meta_query][0][key]=trending&
								 filter[meta_query][0][value]=man&
								 filter[meta_query][0][compare]=LIKE&
								 filter[meta_query][1][key]=trending&
								 filter[meta_query][1][value]=women&
								 filter[meta_query][1][compare]=LIKE&
								 filter[meta_query][2][key]=trending&
								 filter[meta_query][2][value]=kids&
								 filter[meta_query][2][compare]=LIKE&
								 filter[meta_query][3][key]=trending&
								 filter[meta_query][3][value]=accessories&
								 filter[meta_query][3][compare]=LIKE&
								 filter[meta_query][relation]=OR`;

		return fetch( api + query )
			   .then( response => response.json() )
			   // update product List
			   .then( json => dispatch( receiveProducts( json ) ) )
			   // update trending products
			   .then( prevAction => dispatch( receiveTrending( prevAction.json ) ) )
	};
};

/**
 * Brands
 ************************/

 // requesting brands
export const REQUEST_BRANDS = 'REQUEST_BRANDS';
export function requestBrands() {
	return {
		type: REQUEST_BRANDS,
	};
};

// receiving brands
export const RECEIVE_BRANDS = 'RECEIVE_BRANDS';
export function receiveBrands( json ) {
	return {
		type: RECEIVE_BRANDS,
		json
	};
};

// requesting and receiving brands
export function fetchBrands() {
	return function( dispatch, getState, api ) {
		dispatch( requestBrands() );

		const query = `/brands`;

		return fetch( api + query )
			   .then( response => response.json() )
			   .then( json => dispatch( receiveBrands( json ) ) )
	};
};

/**
 * ProductSection
 ************************/

 // requesting product section item
export const REQUEST_PRODUCT_SECTION_ITEM = 'REQUEST_PRODUCT_SECTION_ITEM';
export function requestProductSection() {
	return {
		type: REQUEST_PRODUCT_SECTION_ITEM,
	};
};

// receiving product section item
export const RECEIVE_PRODUCT_SECTION_ITEM = 'RECEIVE_PRODUCT_SECTION_ITEM';
export function receiveProductSection( json ) {
	return {
		type: RECEIVE_PRODUCT_SECTION_ITEM,
		json
	};
};

// requesting and receiving product section item
export function fetchProductSectionItem( id ) {
	return function( dispatch, getState, api ) {
		dispatch( requestProductSection() );

		const query = `/products/${ id }`;

		return fetch( api + query )
			   .then( response => response.json() )
			   // update product List
			   .then( json => dispatch( receiveProducts( json ) ) )
			   // update product section item
			   .then( prevAction => dispatch( receiveProductSection( prevAction.json ) ) )
	};
};