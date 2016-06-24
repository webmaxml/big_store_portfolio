// deps
import _ from 'underscore';
// actions
import { REQUEST_PRODUCT_SECTION_ITEM, 
		 RECEIVE_PRODUCT_SECTION_ITEM } from '../actions';

const initialState = {
	isFetching: false,
	item: {}
};

function productSection( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_PRODUCT_SECTION_ITEM:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_PRODUCT_SECTION_ITEM:
			return _.extend( {}, state, {
				isFetching: false,
				item: action.json
			} );
		default:
			return state;
	}
};

export default productSection;