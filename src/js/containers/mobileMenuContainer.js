// deps
import { connect } from 'react-redux';
// actions
import { mobileMenuToggle } from '../actions';
// components
import MobileMenu from '../components/mobileMenu';

function mapStateToProps( state ) {
	return {
		menuState: state.mobileMenu
	};
};

function mapDispatchToProps( dispatch ) {
	return {
		closeMenu: () => {
			dispatch( mobileMenuToggle( true ) );
		}
	};
};

const MobileMenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( MobileMenu );

export default MobileMenuContainer;