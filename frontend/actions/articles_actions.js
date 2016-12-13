import FeedsAPIUtil from '../util/feeds_util';

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
        console.log(data);
      }
    );
  };
}
