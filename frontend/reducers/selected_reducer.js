import { RECEIVE_SELECTED_FEED, RECEIVE_SELECTED_COLLECTION } from '../actions/selected_actions';


const defaultState = {
  feed: {},
  collection: {}
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
    default:
      return state;
  }
};

export default SelectedReducer;
