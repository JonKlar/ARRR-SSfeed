import React from 'react';
import DateHelper from '../../../util/date_util';
import ArticleSaveButton from '../article_save_button';

class FeedView extends React.Component {
  constructor(props) {
    super(props);
    this.handlePassThrough = this.handlePassThrough.bind(this);
  }

  handlePassThrough(url) {
    window.open(url);
  }


  render() {
    let content = this.props.articles.map( (article) => (
      <li key={article.title} className='feed-view'>
        <h1 className="feed-view-title"
            onClick={() => this.handlePassThrough(article.link)}
        >{article.title}</h1>
        <h2 className="feed-view-author">{article.author}</h2>
        <h3 className="feed-view-date">
          {DateHelper.time_ago_in_words_with_parsing(article.publishedDate)}
        </h3>
        <h4 className="feed-view-save"><ArticleSaveButton article={article}/></h4>
        <br/>
        <article className="feed-view-content"
          dangerouslySetInnerHTML={{__html: article.content }}
        />
      </li>
    ));

    return(
      <div>
        <section>
          <h1 className="feed-view-feed-name">{this.props.feed.title}</h1>
          <ul>{content}</ul>
        </section>
      </div>
    );
  }
}

export default FeedView;
