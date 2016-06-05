import React from 'react';

class SearchForm extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
        	<form className="search-form">
        		<input className="search-form__input" type="text" placeholder="Search" />
        		<button className="search-form__submit">
        			<i clasName="fa fa-search" />
        		</button>
        	</form>
        );
    }
    
}

export default SearchForm;
