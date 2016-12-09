export const RECEIVE_SELECTED_FEED = 'RECEIVE_SELECTED_FEED';
export const RECEIVE_SELECTED_COLLECTION = 'RECEIVE_SELECTED_COLLECTION';

export function setSelectedFeed(feed) {
  return ({
    type: RECEIVE_SELECTED_FEED,
    feed
  });
}

export function setSelectedCollection(collection) {
  return ({
    type: RECEIVE_SELECTED_COLLECTION,
    collection
  });
}
