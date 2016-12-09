import CollectionAPIUtil from '../util/collection_util.js';
import { receiveErrors, receiveCurrentUser } from './session_actions';


export function createCollection(collection) {
  return (dispatch) => {
    return CollectionAPIUtil.createCollection(collection)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}

export function addFeed(collection, feed) {
  return (dispatch) => {
    return CollectionAPIUtil.addFeed(collection, feed)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}

export function removeFeed(collection, feed) {
  return (dispatch) => {
    return CollectionAPIUtil.removeFeed(collection, feed)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}
