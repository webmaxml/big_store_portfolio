// deps
import { connect } from 'react-redux';
// actions
import { fetchNews } from '../../actions';
// components
import NewsFeed from './newsFeed';

function mapStateToProps( state ) {
	return {
		item: state.news.item
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		fetchNews: () => dispatch( fetchNews() )
	};
};

const NewsFeedContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( NewsFeed );

export default NewsFeedContainer;