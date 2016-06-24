// deps
import { connect } from 'react-redux';
// actions
import { fetchFeaturedSlider } from '../../actions';
// components
import FeaturedSlider from './featuredSlider';

function mapStateToProps( state ) {
	return { 
		productList: state.products,
		items: state.featuredSlider.items
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchItems: () => dispatch( fetchFeaturedSlider() )
	};
};

const FeaturedSliderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( FeaturedSlider );

export default FeaturedSliderContainer;