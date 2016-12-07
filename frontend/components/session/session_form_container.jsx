import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) =>{
 return ({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors,
});};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/signup') {
    return ({
      formType: 'Sign Up',
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors()),
      otherURL: '/login'
    });} else {
    return ({
      formType: 'Login',
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      otherURL: '/signup',
    });
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
