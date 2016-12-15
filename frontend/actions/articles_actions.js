import FeedsAPIUtil from '../util/feeds_util';
import ArticleAPIUtil from '../util/article_util';
import { receiveCurrentUser, receiveErrors } from './session_actions';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RESET_ARTICLES = 'RESET_ARTICLES';

export function receiveArticles(articles) {
    return ({
      type: RECEIVE_ARTICLES,
      articles
    });
}

export function resetArticles() {
    return ({
      type: RESET_ARTICLES,
    });
}


export function getArticles(feed) {
  return (dispatch) => {
    return FeedsAPIUtil.getArticles(feed)
    .then(
      (xml) => {
          const data = {
            feedTitle: feed.title,
            articles: xml.responseData.feed.entries
          };
        dispatch(receiveArticles(data));
      }
    );
  };
}

export function createArticle(article) {
  return (dispatch) => {
    return ArticleAPIUtil.createArticle(article)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}

export function destroyArticle(article) {
  return (dispatch) => {
    return ArticleAPIUtil.destroyArticle(article)
    .then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
}
