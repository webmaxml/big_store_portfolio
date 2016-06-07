// deps
import { connect } from 'react-redux';
// actions
import { mobileMenuToggle } from '../actions';
// components
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