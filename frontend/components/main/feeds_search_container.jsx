import { connect } from 'react-redux';
import FeedsSearch from './feeds_search';
import { searchFeeds } from '../../actions/feeds_search_actions';
import { setSelectedFeed } from '../../actions/selected_actions';

const mapStateToProps = (state) => {
 return ({
  feeds: state.feeds.searchedFeeds,
  currentUser: state.session.currentUser,
});};

const mapDispatchToProps = (dispatch) => ({
  searchFeeds: (query) => dispatch(searchFeeds(query)),
  setSelectedFeed: (feed) => dispatch(setSelectedFeed(feed)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsSearch);
