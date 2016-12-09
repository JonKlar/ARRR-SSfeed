import { combineReducers } from 'redux';
import session from './session_reducer';
import feeds from './feeds_search_reducer';
import selected from './selected_reducer';

const RootReducer = combineReducers({
  session,
  feeds,
  selected,
});

export default RootReducer;
