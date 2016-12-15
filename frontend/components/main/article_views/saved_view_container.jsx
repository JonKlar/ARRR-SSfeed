import { connect } from 'react-redux';
import SavedView from './saved_view';
import { savedArticles } from '../../../reducers/selectors';
import { setSelectedArticle } from '../../../actions/selected_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  articles: savedArticles(state)
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedArticle: (article) => dispatch(setSelectedArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedView);
