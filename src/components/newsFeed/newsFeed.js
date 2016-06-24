// deps
import React from 'react';
import _ from 'underscore';

class NewsFeed extends React.Component {

    constructor(props) {
        super( props );

        // check if we have to fetch items and
        // construct item object if we dont need to
        let needToFetch = _.isEmpty( props.item ) ? true : false;
        let item = needToFetch ? {} : this.constructState( props.item );

        this.state = {
            item,
            needToFetch,
        };
    }

    componentDidMount() {
        if ( this.state.needToFetch ) {
            this.props.fetchNews();          
        } 
    }

    componentWillReceiveProps( nexProps ) {
        this.setState({
            item: {
                date: nexProps.item.itemDate,
                content: nexProps.item.itemContent 
            }
        });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on item state change
        return nextState.item === this.state.item ? false : true;
    }

    // constructing item object
    constructState( item ) {
        return {
            date: item.itemDate,
            content: item.itemContent
        }
    }

    render() {
        return (
            <div className="news-feed">
                <span className="news-feed__date">{ `${this.state.item.date} - ` }</span>
                <span className="news-feed__content">{ this.state.item.content }</span>
            </div>
        );
    }

}

export default NewsFeed