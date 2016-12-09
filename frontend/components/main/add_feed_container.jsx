import AddFeed from './add_feed';
import { connect } from 'react-redux';
import { addFeed, removeFeed, createCollection } from '../../actions/collection_actions';
const mapStateToProps = (state) => {
return ({
  collections: state.session.currentUser.collections,
  feed: state.selected.feed,
});
};
const mapDispatchToProps = (dispatch) => ({
  addFeed: (collection, feed) => dispatch(addFeed(collection, feed)),
  removeFeed: (collection, feed) => dispatch(removeFeed(collection, feed)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFeed);
