import AddFeed from './add_feed';
import { connect } from 'react-redux';
import { addFeed, removeFeed, createCollection, destroyCollection } from '../../actions/collection_actions';
import { getArticles, resetArticles } from '../../actions/articles_actions';
const mapStateToProps = (state) => {
return ({
  collections: state.session.currentUser.collections,
  feed: state.selected.feed,
});
};
const mapDispatchToProps = (dispatch) => ({
  addFeed: (collection, feed) => dispatch(addFeed(collection, feed)),
  removeFeed: (collection, feed) => dispatch(removeFeed(collection, feed)),
  createCollection: (collection) => dispatch(createCollection(collection)),
  destroyCollection: (collection) => dispatch(destroyCollection(collection)),
  getArticles: (feed) => dispatch(getArticles(feed)),
  resetArticles: () => dispatch(resetArticles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFeed);
