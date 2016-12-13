import { RECEIVE_SELECTED_FEED, RECEIVE_SELECTED_COLLECTION, RECEIVE_SELECTED_ARTICLE, CLEAR_SELECTED_ARTICLE } from '../actions/selected_actions';


const defaultState = {
  feed: {},
  collection: {},
  article: {}
};

const SelectedReducer = (state=defaultState, action) => {
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_SELECTED_FEED:
      newState.feed = action.feed;
      return newState;
    case RECEIVE_SELECTED_COLLECTION:
      newState.collection = action.collection;
      return newState;
    case RECEIVE_SELECTED_ARTICLE:
      newState.article = action.article;
      return newState;
    case CLEAR_SELECTED_ARTICLE:
      newState.article = {};
      return newState;
    default:
      return state;
  }
};

export default SelectedReducer;
