import { connect } from 'react-redux';
import { mobileMenuToggle } from '../actions';

import MobileToggle from '../components/mobileToggle';

function mapStateToProps( state ) {
	return {
		menuState: state.mobileMenu
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		onClick: () => {
			dispatch( mobileMenuToggle() );
		}
	};
};

const MobileToggleContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( MobileToggle );

export default MobileToggleContainer;