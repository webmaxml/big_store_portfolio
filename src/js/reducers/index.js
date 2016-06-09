// deps
import { combineReducers } from 'redux';
// reducers
import mobileMenu from './mobileMenu';
import news from './news';
import products from './products';
import topSlider from './topSlider';
import featuredSlider from './featuredSlider';

const rootReducer = combineReducers({
	mobileMenu,
	news,
	products,
	topSlider,
	featuredSlider
});

export default rootReducer;