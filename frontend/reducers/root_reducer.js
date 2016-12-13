import { combineReducers } from 'redux';
import session from './session_reducer';
import feeds from './feeds_search_reducer';
import selected from './selected_reducer';
import articles from './articles_reducer';

const RootReducer = combineReducers({
  session,
  feeds,
  selected,
  articles,
});

export default RootReducer;
