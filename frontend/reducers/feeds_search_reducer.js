import { RECEIVE_FEEDS } from '../actions/feeds_search_actions';

const defaultState = {
  searchedFeeds: []
};

const FeedSearchReducer = (state=defaultState, action) => {
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_FEEDS:
      newState.searchedFeeds = action.feeds;
      return newState;
    default:
      return state;
  }
};

export default FeedSearchReducer;
