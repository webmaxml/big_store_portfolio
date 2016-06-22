// deps
import React from 'react';

class MobileToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.menuState === 'open' ? { open: true } : 
                                                  { open: false }
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.menuState === 'open' ) {
            this.setState({ open: true });
        } else {
            this.setState({ open: false });
        }
    }

    render() {
        let classNames = this.state.open ? 'mobileToggle mobileToggle--open' :
                                           'mobileToggle';   

        return (
            <button className={ classNames } 
                    type="button"
                    onClick={ this.props.onClick }
            >
               <i className="fa fa-bars mobileToggle__icon-open" />
               <i className="fa fa-times mobileToggle__icon-close" />
           </button>
        );
    }

}

export default MobileToggle;