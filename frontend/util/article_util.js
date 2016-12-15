const ArticleAPIUtil = {

  createArticle(article) {
    return ($.ajax({
      method: "POST",
      url: `api/articles`,
      data: { article: {
        title: article.title,
        link: article.link,
        content: article.content,
        content_snippet: article.contentSnippet,
        author: article.author,
        publishedDate: article.publishedDate,
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
  }
};

export default ArticleAPIUtil;
