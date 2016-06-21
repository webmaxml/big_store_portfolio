// deps
import React from 'react';

class MainNav extends React.Component {

    constructor(props) {
        super();
        this.state = {
            items: [
                {
                    title: 'Entertainment',
                    href: '#'
                },
                {
                    title: 'Lifestyle',
                    href: '#'
                },
                {
                    title: 'Technology',
                    href: '#'
                },
                {
                    title: 'Entertainment',
                    href: '#'
                },
                {
                    title: 'Lifestyle',
                    href: '#'
                },
                {
                    title: 'Sports',
                    href: '#'
                },
            ]
        }
    }

    render() {
        return (
            <ul className="main-nav">
                { this.state.items.map( ( item, index ) => {
                    return (
                        <li className="main-nav__item" key={ index }>
                            <a className="main-nav__link" href={ item.href }>{ item.title }</a>
                        </li>
                    );
                } ) }
            </ul>
        );
    }

}

export default MainNav;