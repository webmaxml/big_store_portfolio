import React from 'react';
import SearchForm from './searchForm';

class SocialNav extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
        	<ul className="social-nav">
        		<li className="social-nav__item">
        			<a className="social-nav__link" href="#">
        				<i className="fa fa-twitter" />
        			</a>
        		</li>
        		<li className="social-nav__item">
        			<a className="social-nav__link" href="#">
        				<i className="fa fa-facebook" />
        			</a>
        		</li>
        		<li className="social-nav__item">
        			<a className="social-nav__link" href="#">
        				<i className="fa fa-dribbble" />
        			</a>
        		</li>
        		<li className="social-nav__item">
        			<a className="social-nav__link" href="#">
        				<i className="fa fa-lastfm" />
        			</a>
        		</li>
        		<li className="social-nav__item">
        			<a className="social-nav__link" href="#">
        				<i className="fa fa-linkedin" />
        			</a>
        		</li>
        		<li className="social-nav__item">
        			<a className="social-nav__link" href="#">
        				<i className="fa fa-tumblr" />
        			</a>
        		</li>
        		<li className="social-nav__item social-nav__item--form">
        			<SearchForm />
        		</li>
        	</ul>
        );
    }

}

export default SocialNav;
