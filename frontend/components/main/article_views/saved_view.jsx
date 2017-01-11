import React from 'react';
import DateHelper from '../../../util/date_util';
import ArticleAPIUtil from '../../../util/article_util';

class SavedView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetSelectedArticle = this.handleSetSelectedArticle.bind(this);
  }

  handleSetSelectedArticle(article) {
    this.props.setSelectedArticle(article);
  }

  componentDidMount(){
    if (this.props.currentUser.savedArticles.length === 0) {
      this.props.router.push('/');
    }
  }

  render() {
    const content = this.props.articles.map( (article) => {
      const div = document.createElement('div');
      div.innerHTML = article.description;
      const img = (div.querySelector('img'));
      let source ="http://www.zdnet.com/i/story/61/44/001492/pirateship.png";
      if (img) {
        source = img.src;
      }
      let snippet = (div.innerText);
      snippet = ArticleAPIUtil.parseSnippet(snippet).slice(0, 150) + "...";
      let creator = article.author;
      if (article.creator) {
        creator = article.creator.content;
        if (typeof creator !== "string") {
          creator = article.creator;
        }
      }
      return (
        <li key={article.title}
          className="today-view-content"
          onClick={ () => this.handleSetSelectedArticle(article) }
        >
          <img src={source} className="today-view-image"/>
          <h1 className="today-view-title">{article.title}</h1>
          <h2 className="today-view-author">{creator}</h2>
          <h3 className="today-view-feed-title">{DateHelper.time_ago_in_words_with_parsing(article.pubDate)}</h3>
          <br/>
          <p className="today-view-snippet">{snippet}</p>
        </li>
      );}
    );

    return(
      <div>
        <section>
          <h1 className="feed-view-feed-name">Saved</h1>
          <ul className="today-view">{content}</ul>
        </section>
      </div>
    );
  }
}

export default SavedView;
