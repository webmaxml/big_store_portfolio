// deps
import _ from 'underscore';
// actions
import { REQUEST_TRENDING, 
		 RECEIVE_TRENDING } from '../actions';

const initialState = {
	isFetching: false,
	items: []
};

function trending( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_TRENDING:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_TRENDING:
			return _.extend( {}, state, {
				isFetching: false,
				items: action.json.map( item => item.id )
			} );
		default:
			return state;
	}
};

export default trending;