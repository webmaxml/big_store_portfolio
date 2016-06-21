// deps
import { connect } from 'react-redux';
// actions
import { fetchBrands } from '../actions';
// components
import BrandSlider from '../components/brandSlider';

function mapStateToProps( state ) {
	return { 
		items: state.brands.items
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchItems: () => dispatch( fetchBrands() )
	};
};

const BrandSliderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( BrandSlider );

export default BrandSliderContainer;