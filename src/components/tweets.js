// deps
import React from 'react';

class Tweets extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: [
        		{
        			id: 1,
        			link: 'http://twitter.com/',
        			content: `Check out this great #themeforest item for you 
        					 'Simpler Landing' http://t.co/LbLwldb6`,
        			date: '2 hours ago'
        		},
        		{
        			id: 2,
        			link: 'http://twitter.com/',
        			content: `Check out this great #themeforest item for you 
        					 'Simpler Landing' http://t.co/LbLwldb6`,
        			date: '2 hours ago'
        		},
        		{
        			id: 3,
        			link: 'http://twitter.com/',
        			content: `Check out this great #themeforest item for you 
        					 'Simpler Landing' http://t.co/LbLwldb6`,
        			date: '2 hours ago'
        		},
        	]
        };
    }

    render() {
        return (
        	<article className="tweets">
				<h2 className="tweets__header">Latest tweets</h2>
				<ul className="tweets__item-box">

				{ this.state.items.map( item => {
					return (
						<li className="tweets__item" key={ item.id }>
							<a className="tweets__twitter-link" href={ item.link }>
								<i className="fa fa-twitter tweets__twitter-icon"></i>
							</a>
							<div className="tweets__info"> 
								<p className="tweets__text">{ item.content }</p> 
								<p className="tweets__date">{ item.date }</p>
							</div>
						</li>
					);
				} ) }
		
				</ul>
			</article>
        );
    }

}

export default Tweets;
