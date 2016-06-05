import { connect } from 'react-redux';
import { fetchNews } from '../actions';

import NewsFeed from '../components/newsFeed';

function mapStateToProps( state ) {
	return {
		date: state.news.itemDate,
		content: state.news.itemContent
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