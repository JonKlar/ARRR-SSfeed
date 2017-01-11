const ArticleAPIUtil = {

  createArticle(article, creator) {
    return ($.ajax({
      method: "POST",
      url: `api/articles`,
      data: { article: {
        title: article.title,
        link: article.link,
        content: article.description,
        author: creator,
        publishedDate: article.pubDate,
        categories: article.categories,
      } },
    }));
  },

  destroyArticle(article) {
    return ($.ajax({
      method: "DELETE",
      url: `api/articles/1`,
      data: { article: {
        link: article.link
      }}
    }));
  },

  parseSnippet(snippet) {
    let holder = "";
    for (let i = 0 ; i < snippet.length ; i++ ) {
      if (holder[i] !== " ") {
        holder += snippet[i];
        if (holder.length > 300) {
          return holder + "...";
        }
      }
    }
    return holder;
  }

};
export default ArticleAPIUtil;
