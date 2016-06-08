// deps
import { combineReducers } from 'redux';
// reducers
import mobileMenu from './mobileMenu';
import news from './news';
import products from './products';
import topSlider from './topSlider';

const rootReducer = combineReducers({
	mobileMenu,
	news,
	products,
	topSlider
});

export default rootReducer;