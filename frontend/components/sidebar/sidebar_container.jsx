import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';
import { articlesFromToday, allArticles } from '../../reducers/selectors';

const mapStateToProps = (state) => {
 return ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  todayCount: articlesFromToday(state).length,
  allCount: allArticles(state).length,

});};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
