import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';


window.login = login;

let selectedCollection = {};
if (localStorage.collection && localStorage.collection !== "null") {
  selectedCollection = JSON.parse(localStorage.collection);
}

let selectedFeed = {};
if (localStorage.feed && localStorage.feed !== "null") {
  selectedFeed = JSON.parse(localStorage.feed);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser, errors: [] },
      feeds: { searchedFeeds: [] },
      selected: { feed: selectedFeed, collection: selectedCollection, article: {} },
      articles: { feed_url: [] }
    };
    window.store = configureStore(preloadedState);
  } else {
    window.store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ window.store } />, root);
});
