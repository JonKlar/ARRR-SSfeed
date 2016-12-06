import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
 return ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
});};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
