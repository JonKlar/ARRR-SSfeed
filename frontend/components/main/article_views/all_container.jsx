import AllArticles from './all';
import { connect } from 'react-redux';
import { setSelectedArticle } from '../../../actions/selected_actions';
import { allArticles } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  articles: allArticles(state)
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedArticle: (article) => dispatch(setSelectedArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArticles);
