import { RECEIVE_ARTICLES, RESET_ARTICLES } from '../actions/articles_actions';

const defaultState = {
  feed_title: []
};

const ArticlesReducer = (state=defaultState, action) => {
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_ARTICLES:
      const feedTitle = action.articles.feedTitle;
      newState[feedTitle] = action.articles.articles;
      return newState;
    case RESET_ARTICLES:
      newState = defaultState;
      return newState;
    default:
      return state;
  }
};

export default ArticlesReducer;
