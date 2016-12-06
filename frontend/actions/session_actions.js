import SessionAPIUtil from '../util/session_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export function receiveCurrentUser(user) {
    return ({
      type: RECEIVE_CURRENT_USER,
      user
    });
}

export function receiveErrors(errors) {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
}

export function login(user) {
  return (dispatch) => {
    return SessionAPIUtil.login(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}

export function logout() {
  return (dispatch) => {
    return SessionAPIUtil.logout()
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors)));
  };
}

export function signup(user) {
  return (dispatch) => {
    return SessionAPIUtil.signup(user)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors)));
  };
}
