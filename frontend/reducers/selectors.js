export function allArticles(state) {
  const content = [];
  Object.keys(state.articles).forEach( (feed) => {
    state.articles[feed].forEach( (story) => {
      content.push({ feed, story });
    });
  });
  content.sort( (a, b) => {
    return (new Date(b.story.publishedDate) - new Date(a.story.publishedDate));
  });
  return content;
}




export function articlesInCollection(state) {
  if (Object.keys(state.selected.collection).length === 0) {
    return [];
  }
  function included(feedTitle, collection) {
    for (let i = 0 ; i < collection.feeds.length ; i++) {
      if (collection.feeds[i].title === feedTitle) {
        return true;
      }
    }
    return false;
  }

  let articles = [];
  Object.keys(state.articles).forEach( (feedTitle) => {
    if (included(feedTitle, state.selected.collection)) {
      articles = articles.concat(state.articles[feedTitle]);
    }
  });
  articles.sort( (a, b) => {
    return (new Date(b.publishedDate) - new Date(a.publishedDate));
  });
  return articles;
}

export function articlesInFeed(state) {
  let articles = [];
  if (state.selected.feed.title && state.articles[state.selected.feed.title]) {
    articles = state.articles[state.selected.feed.title];
  }
  return articles;
}


export function articlesFromToday(state) {
  let articles = [];
  Object.keys(state.articles).forEach( (feedTitle) => {
    state.articles[feedTitle].forEach( (article) => {
      if ((new Date - new Date(article.publishedDate)) < 86400000) {
        articles.push({story: article, feedTitle});
      }
    });
  });
  articles.sort( (a, b) => {
    return (new Date(b.story.publishedDate) - new Date(a.story.publishedDate));
  });
  return articles;
}
