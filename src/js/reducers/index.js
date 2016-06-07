// deps
import { combineReducers } from 'redux';
// reducers
import mobileMenu from './mobileMenu';
import news from './news';

const rootReducer = combineReducers({
	mobileMenu,
	news
});

export default rootReducer;