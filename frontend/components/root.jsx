import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import FeedsSearchContainer from './main/feeds_search_container';
import AddFeedContainer from './main/add_feed_container';
import AllArticlesContainer from './main/article_views/all_container';

const Root = ({ store }) => {
  function ensureLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser === null){
      replace('/login');
    }}

    function loggedIn(nextState, replace) {
      if (store.getState().session.currentUser) {
        replace('/');
      }
    }
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component= { App } onEnter={ ensureLoggedIn }>
          <Route path="/feeds" component={ FeedsSearchContainer }>
            <Route path="/addfeed" component= { AddFeedContainer }/>
          </Route>
          <Route path="/all" component={ AllArticlesContainer }/>
        </Route>
        <Route path="/login" component= { SessionFormContainer } onEnter={ loggedIn }/>
        <Route path="/signup" component= { SessionFormContainer } onEnter={ loggedIn }/>
      </Router>
    </Provider>
  );
};

export default Root;
