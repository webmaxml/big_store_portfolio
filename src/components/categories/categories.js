// deps
import React from 'react';

class Categories extends React.Component {

    constructor(props) {
        super();
        this.state = {
        	items: [
        		{ title: 'New collection', link: '#' },
        		{ title: 'New collection', link: '#' },
        		{ title: 'New collection', link: '#' },
        		{ title: 'Bestsellers', link: '#' },
        		{ title: 'Bestsellers', link: '#' },
        		{ title: 'Bestsellers', link: '#' },
        		{ title: 'Manufactures', link: '#' },
        		{ title: 'Manufactures', link: '#' },
        		{ title: 'Manufactures', link: '#' },
        		{ title: 'Supliers', link: '#' },
        		{ title: 'Supliers', link: '#' },
        		{ title: 'Supliers', link: '#' },
        		{ title: 'New collection', link: '#' },
        		{ title: 'New collection', link: '#' },
        		{ title: 'New collection', link: '#' }
        	]
        };
    }

    render() {
        return (
        	<article className="categories">
				<h2 className="categories__header">Categories</h2>
				<ul className="categories__item-box">

					{ this.state.items.map( ( item, index ) => {

                        // text-align:justify dynamically works only when adding text content after item
                        // its a bit of a hack, but i am trying not to use flex here
						return [
							<li className="categories__item" key={ index }>
								<a className="categories__item-link" href={ item.link }>{ item.title }</a>
							</li>, ' '
						];
					} ) }
					
				</ul>
			</article>
		);
    }

}

export default Categories;
