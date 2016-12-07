import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: [],

};

const SessionReducer = (state=defaultState, action) => {
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON.errors;
      return newState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
