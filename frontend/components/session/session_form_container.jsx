import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state) =>{
 return ({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors,
});};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/signup') {
    return ({
      formType: 'signup',
      processForm: (user) => dispatch(signup(user)),
      otherURL: '/login'
    });} else {
    return ({
      formType: 'login',
      processForm: (user) => dispatch(login(user)),
      otherURL: '/signup',
    });
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
