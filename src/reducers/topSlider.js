// deps
import _ from 'underscore';
// actions
import { REQUEST_TOP_SLIDER_ITEMS, 
		 RECEIVE_TOP_SLIDER_ITEMS } from '../actions';

const initialState = {
	isFetching: false,
	items: []
};

function topSlider( state = initialState, action ) {
	switch ( action.type ) {
		case REQUEST_TOP_SLIDER_ITEMS:
			return _.extend( {}, state, {
				isFetching: true
			} );
		case RECEIVE_TOP_SLIDER_ITEMS:
			return _.extend( {}, state, {
				isFetching: false,
				items: action.json.map( item => item.id )
			} );
		default:
			return state;
	}
};

export default topSlider;