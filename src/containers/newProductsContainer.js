// deps
import { connect } from 'react-redux';
// actions
import { fetchNewProducts } from '../actions';
// components
import NewProducts from '../components/newProducts/newProducts';

function mapStateToProps( state ) {
	return { 
		productList: state.products,
		items: state.newProducts.items
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchItems: () => dispatch( fetchNewProducts() )
	};
};

const NewProductsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( NewProducts );

export default NewProductsContainer;