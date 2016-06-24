// deps
import _ from 'underscore';
// actions
import { RECEIVE_PRODUCT_ITEMS } from '../actions';

function products( state = {}, action ) {
	switch ( action.type ) {
		case RECEIVE_PRODUCT_ITEMS:
			let newState = _.extend( {}, state );

			if ( _.isArray( action.json ) ) {
				// json - [ {...}, {...}, ... ]
				// we need - { 'id':{...}, 'id':{...}, ... }
				action.json.map( item => {
					let obj = {};
					obj[item.id] = item;
					_.extend( newState, obj );
				} )
			};

			if ( _.isObject( action.json ) ) {
				// json - {...}
				// we need - { 'id':{...} }
				let obj = {};
				obj[ action.json.id ] = action.json;
				_.extend( newState, obj );
			};

			return newState;
		default:
			return state;
	}
};

export default products;