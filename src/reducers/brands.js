// deps
import _ from 'underscore';
// actions
import { REQUEST_BRANDS, 
		 RECEIVE_BRANDS } from '../actions';

const initialState = {
	isFetching: false,
	items: []
};

function brands( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_BRANDS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_BRANDS:
			return _.extend( {}, state, {
				isFetching: false,
				items: action.json
			} );
		default:
			return state;
	}
};

export default brands;