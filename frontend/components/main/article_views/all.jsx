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
    const articles = this.props.articles;
    const content = [];
    Object.keys(articles).forEach( (feed) => {
      articles[feed].forEach( (story) => {
        content.push(
          <div className="story">
            <div className="story-source">{feed}</div>
            <article className="story-title" onClick={() => this.handleSelectArticle(story)}>{story.title}</article>
            <div className="story-date">{DateHelper.time_ago_in_words_with_parsing(story.publishedDate)}</div>
          </div>);
        });
      });




    return(
      <div>
        <section>
          <h1>{content}</h1>

        </section>

      </div>
    );
  }
}

export default AllArticles;
