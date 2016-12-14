import React from 'react';

class TodayView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetSelectedArticle = this.handleSetSelectedArticle.bind(this);
  }

  handleSetSelectedArticle(article) {
    this.props.setSelectedArticle(article);
  }

  render() {
    const content = this.props.articles.map( (article) => {
      const div = document.createElement('div');
      div.innerHTML = article.story.content;
      const img = (div.querySelector('img'));
      let source ="http://www.zdnet.com/i/story/61/44/001492/pirateship.png";
      if (img) {
        source = img.src;
      }

      return (
        <li key={article.story.title}
          className="today-view-content"
          onClick={ () => this.handleSetSelectedArticle(article.story) }
        >
          <img src={source} className="today-view-image"/>
          <h1 className="today-view-title">{article.story.title}</h1>
          <h2 className="today-view-author">{article.story.author}</h2>
          <h3 className="today-view-feed-title">{article.feedTitle}</h3>
          <br/>
          <p className="today-view-snippet">{article.story.contentSnippet}</p>
        </li>
      );}
    );

    return(
      <div>
        <section>
          <h1 className="feed-view-feed-name">Today</h1>
          <ul className="today-view">{content}</ul>
        </section>
      </div>
    );
  }
}

export default TodayView;
