// deps
import { connect } from 'react-redux';
// components
import ProductSection from './productSection';

function mapStateToProps( state ) {
	return { 
		productList: state.products
	};
};

const ProductSectionContainer = connect(
	mapStateToProps
)( ProductSection );

export default ProductSectionContainer;