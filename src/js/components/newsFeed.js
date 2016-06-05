import React from 'react';

class NewsFeed extends React.Component {

    constructor(props) {
        super();
        this.state = {
            date: '',
            content: ''
        }
    }

    componentDidMount() {
        this.props.fetchNews()
    }

    componentWillReceiveProps( nexProps ) {
        this.setState({
            date: nexProps.date,
            content: nexProps.content
        });
    }

    render() {
        return (
            <div className="news-feed">
                <span className="news-feed__date">{ `${this.state.date} - ` }</span>
                <span className="news-feed__content">{ this.state.content }</span>
            </div>
        );
    }

}

export default NewsFeed