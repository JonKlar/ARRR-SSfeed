import React from 'react';
import DateHelper from '../../../util/date_util';


class CollectionView extends React.Component {
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
      div.innerHTML = article.content;
      const img = (div.querySelector('img'));
      let source ="#";
      if (img) {
        source = img.src;
      }
      
      return (
        <li key={article.title}
          className="collection-view-content"
          onClick={() => this.handleSetSelectedArticle(article) }
        >
          <img src={source} className="collection-view-image"/>
          <h1 className="collection-view-title">{article.title}</h1>
          <h2 className="collection-view-author">by {article.author}</h2>
          <h3 className="collection-view-date">
            {DateHelper.time_ago_in_words_with_parsing(article.publishedDate)}
          </h3>
          <br/>
          <p className="collection-view-snippet">{article.contentSnippet}</p>
        </li>
      );}
    );


    return(
      <div>
        <section>
          <h1 className="collection-top-line">{this.props.collection.title}</h1>
          <ul>{content}</ul>
        </section>
      </div>
    );
  }
}

export default CollectionView;
