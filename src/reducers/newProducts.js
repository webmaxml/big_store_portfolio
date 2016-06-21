// deps
import _ from 'underscore';
// actions
import { REQUEST_NEW_PRODUCTS, 
		 RECEIVE_NEW_PRODUCTS } from '../actions';

const initialState = {
	isFetching: false,
	items: []
};

function newProducts( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_NEW_PRODUCTS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_NEW_PRODUCTS:
			return _.extend( {}, state, {
				isFetching: false,
				items: action.json.map( item => item.id )
			} );
		default:
			return state;
	}
};

export default newProducts;