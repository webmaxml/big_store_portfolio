// deps
import _ from 'underscore';
// actions
import { RECEIVE_PRODUCT_ITEMS } from '../actions';

function products( state = {}, action ) {
	switch ( action.type ) {
		case RECEIVE_PRODUCT_ITEMS:
			let newState = _.extend( {}, state );

			// json - [ {...}, {...}, ... ]
			// we need { 'id':{...}, 'id':{...}, ... }
			action.json.map( item => {
				let obj = {};
				obj[item.id] = item;
				_.extend( newState, obj );
			} )

			return newState;
		default:
			return state;
	}
};

export default products;