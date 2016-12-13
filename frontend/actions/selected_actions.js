export const RECEIVE_SELECTED_FEED = 'RECEIVE_SELECTED_FEED';
export const RECEIVE_SELECTED_COLLECTION = 'RECEIVE_SELECTED_COLLECTION';
export const RECEIVE_SELECTED_ARTICLE = 'RECEIVE_SELECTED_ARTICLE';
export const CLEAR_SELECTED_ARTICLE = 'CLEAR_SELECTED_ARTICLE';

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

export function setSelectedArticle(article) {
  return ({
    type: RECEIVE_SELECTED_ARTICLE,
    article
  });
}

export function clearSelectedArticle() {
  return ({
    type: CLEAR_SELECTED_ARTICLE,
  });
}
