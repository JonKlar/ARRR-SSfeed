export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
import FeedsAPIUtil from '../util/feeds_util';

export function receiveFeeds(feeds) {
    return ({
      type: RECEIVE_FEEDS,
      feeds
    });
}


export function searchFeeds(query) {
  return (dispatch) => {
    return FeedsAPIUtil.searchFeeds(query)
    .then(
      (feeds) => dispatch(receiveFeeds(feeds))
    );
  };
}
