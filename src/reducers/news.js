// deps
import _ from 'underscore';
// actions
import { REQUEST_NEWS, RECEIVE_NEWS } from '../actions';

const initialState = {
	isFetching: false,
	item: {}
};

function news( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_NEWS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_NEWS:
			return _.extend( {}, state, {
				isFetching: false,
				item: {
					itemDate: new Date( action.json.modified ).toLocaleDateString(),
					itemContent: action.json.acf.content
				}
			} );
		default:
			return state;
	}
};

export default news;