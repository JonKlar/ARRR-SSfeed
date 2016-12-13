import React from 'react';
import DateHelper from '../../../util/date_util';

class DetailedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseDetail = this.handleCloseDetail.bind(this);
  }

  handleCloseDetail(e) {
    this.props.clearSelectedArticle();
  }

  render() {
    if (this.props.selectedArticle.content) {
      return (
        <div className="detailed-article-container">
          <div className="detailed-article-deadspace" onClick={this.handleCloseDetail}/>
          <div className="detailed-article-headline">
            <a href={this.props.selectedArticle.link}>
              <h1>{this.props.selectedArticle.title}</h1>
            </a>
            <h2>{this.props.selectedArticle.author}</h2>
            <h3>{DateHelper.time_ago_in_words_with_parsing(this.props.selectedArticle.publishedDate)}</h3>
          </div>

          <article className="detailed-article" dangerouslySetInnerHTML={{__html: this.props.selectedArticle.content }} ></article>
        </div>
      );
    } else {
      return (<div className="hidden-detailed-article"/>);
    }
  }
}

export default DetailedArticle;
