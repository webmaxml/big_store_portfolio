// deps
import { combineReducers } from 'redux';
// reducers
import mobileMenu from './mobileMenu';
import news from './news';
import products from './products';
import topSlider from './topSlider';
import featuredSlider from './featuredSlider';
import newProducts from './newProducts';
import trending from './trending';
import brands from './brands';

const rootReducer = combineReducers({
	mobileMenu,
	news,
	products,
	topSlider,
	featuredSlider,
	newProducts,
	trending,
	brands
});

export default rootReducer;