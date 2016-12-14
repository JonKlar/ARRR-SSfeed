import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import FeedsSearchContainer from './main/feeds_search_container';
import AddFeedContainer from './main/add_feed_container';
import AllArticlesContainer from './main/article_views/all_container';
import CollectionViewContainer from './main/article_views/collection_view_container';
import FeedViewContainer from './main/article_views/feed_view_container';
import TodayViewContainer from './main/article_views/today_view_container';

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
      <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
        <Route component= { App } onEnter={ ensureLoggedIn }>
          <Route path="/feeds" component={ FeedsSearchContainer }>
            <Route path="/addfeed" component= { AddFeedContainer }/>
          </Route>
          <Route path="/all" component={ AllArticlesContainer }/>
          <Route path="/collection_view" component={ CollectionViewContainer }/>
          <Route path="/feed_view" component={ FeedViewContainer }/>
          <Route path="/" component={ TodayViewContainer }/>
        </Route>
        <Route path="/login" component= { SessionFormContainer } onEnter={ loggedIn }/>
        <Route path="/signup" component= { SessionFormContainer } onEnter={ loggedIn }/>
      </Router>
    </Provider>
  );
};

export default Root;
