import { MOBILE_MENU_TOGGLE } from '../actions';

const mobileMenu = function( state = 'close', action ) {
	switch ( action.type ) {
		case MOBILE_MENU_TOGGLE:
			if ( action.forceClose ) {
				return 'close';
			};
			return state === 'close' ? 'open' : 'close';
		default:
			return state;
	}
};

export default mobileMenu;