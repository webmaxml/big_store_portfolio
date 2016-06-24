// deps
import { connect } from 'react-redux';
// actions
import { fetchProductSectionItem } from '../../actions';
// components
import ProductSection from './productSection';

function mapStateToProps( state ) {
	return { 
		productList: state.products,
		item: state.productSection.item
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchItem: ( id ) => dispatch( fetchProductSectionItem( id ) )
	};
};

const ProductSectionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( ProductSection );

export default ProductSectionContainer;