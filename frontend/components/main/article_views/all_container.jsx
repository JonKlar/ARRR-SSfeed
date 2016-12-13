import AllArticles from './all';
import { connect } from 'react-redux';
import { setSelectedArticle } from '../../../actions/selected_actions';

const mapStateToProps = (state) => ({
  articles: state.articles
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedArticle: (article) => dispatch(setSelectedArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllArticles);
