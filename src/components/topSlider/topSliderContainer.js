// deps
import { connect } from 'react-redux';
// actions
import { fetchTopSlider } from '../../actions';
// components
import TopSlider from './topSlider';

function mapStateToProps( state ) {
	return { 
		productList: state.products,
		items: state.topSlider.items
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchItems: () => dispatch( fetchTopSlider() )
	};
};

const TopSliderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( TopSlider );

export default TopSliderContainer;