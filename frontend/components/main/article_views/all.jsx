import React from 'react';
import DateHelper from '../../../util/date_util';

class AllArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelectArticle(article) {
    this.props.setSelectedArticle(article);
  }

  render(){
     let content = this.props.articles.map( (article) => {
       return (
          <div className="story" key={article.story.title}>
            <div className="story-source">{article.feed}</div>
            <article className="story-title" onClick={() => this.handleSelectArticle(article.story)}>{article.story.title}</article>
            <div className="story-date">{DateHelper.time_ago_in_words_with_parsing(article.story.pubDate)}</div>
          </div>
          );
        });


    return(
      <div>
        <section>
          <div className="all-title">All</div>
          <h1>{content}</h1>
        </section>
      </div>
    );
  }
}

export default AllArticles;
