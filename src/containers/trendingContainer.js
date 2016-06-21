// deps
import { connect } from 'react-redux';
// actions
import { fetchTrending } from '../actions';
// components
import Trending from '../components/trending';

function mapStateToProps( state ) {
	return {
		productList: state.products,
		items: state.trending.items
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchItems: () => dispatch( fetchTrending() )
	};
};

const TrendingContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( Trending );

export default TrendingContainer;