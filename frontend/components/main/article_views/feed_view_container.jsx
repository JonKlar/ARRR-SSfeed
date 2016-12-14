import { connect } from 'react-redux';
import FeedView from './feed_view';
import { articlesInFeed } from '../../../reducers/selectors';
import { setSelectedArticle } from '../../../actions/selected_actions';

const mapStateToProps = (state) => ({
  articles: articlesInFeed(state),
  feed: state.selected.feed,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedArticle: (article) => dispatch(setSelectedArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedView);
