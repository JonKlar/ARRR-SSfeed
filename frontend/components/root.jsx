import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

function ensureLoggedIn(nextState, replace) {
  if (window.store.getState().session.currentUser === null){
  replace('/login');
}}

function loggedIn(nextState, replace) {
  if (window.store.getState().session.currentUser) {
    replace('/');
  }
}

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component= { App } onEnter={ ensureLoggedIn } />
      <Route path="/login" component= { SessionFormContainer } onEnter={ loggedIn }/>
      <Route path="/signup" component= { SessionFormContainer } onEnter={ loggedIn }/>
    </Router>
  </Provider>
);

export default Root;
