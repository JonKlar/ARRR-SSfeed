import CollectionAPIUtil from '../util/collection_util.js';
import { receiveErrors } from './session_actions';
export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS;';

export function receiveCollections(collections) {
    return ({
      type: RECEIVE_COLLECTIONS,
      collections
    });
}


export function createCollection(collection) {
  return (dispatch) => {
    return CollectionAPIUtil.createCollection(collection)
    .then(
      (user) => dispatch(receiveCollections(user.collections)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}
