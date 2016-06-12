// deps
import React from 'react';

class About extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        		   Error laudantium commodi assumenda quae, expedita optio aliquam, 
        		   eveniet dolores fugit iusto, quidem voluptatum delectus quis explicabo 
        		   aliquid quasi ea eum placeat. Lorem ipsum dolor sit amet, 
        		   consectetur adipisicing elit. Eius architecto odit aliquam est`,
        	address: {
        		title: 'Address 123, Country',
        		link: '#'
        	},
        	phone: {
        		title: '(043) 875-9211',
        		link: '#'
        	},
        	mail: {
        		title: 'info&commat;kopasoft.com',
        		link: '#'
        	}
        };
    }

    render() {
        return (
        	<article className="about">
				<h2 className="about__header">Who we are</h2>
				<p className="about__text">{ this.state.text }</p>
				<ul className="about__info">
					<li className="about__item">
						<i className="fa fa-flag about__address-icon"></i>
						<a className="about__address" href={ this.state.address.link }>
							{ this.state.address.title }
						</a>
					</li>
					<li className="about__item">
						<i className="fa fa-mobile about__phone-icon"></i>
						<a className="about__phone" href={ this.state.phone.link }>
							{ this.state.phone.title }
						</a>
					</li>
					<li className="about__item">
						<i className="fa fa-envelope about__mail-icon"></i>
						<a className="about__mail" href={ this.state.mail.link }>
							{ this.state.mail.title }
						</a>
					</li>
				</ul>
			</article>
        );
    }

}

export default About;
