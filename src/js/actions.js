import fetch from 'isomorphic-fetch';

export const MOBILE_MENU_TOGGLE = 'MOBILE_MENU_TOGGLE';

export function mobileMenuToggle( forceClose = false ) {
	return {
		type: MOBILE_MENU_TOGGLE,
		forceClose: forceClose
	};
};
