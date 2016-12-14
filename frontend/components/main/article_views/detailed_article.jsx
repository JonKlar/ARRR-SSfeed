import React from 'react';
import DateHelper from '../../../util/date_util';

class DetailedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseDetail = this.handleCloseDetail.bind(this);
    this.handlePassThrough = this.handlePassThrough.bind(this);
  }

  handleCloseDetail(e) {
    this.props.clearSelectedArticle();
  }

  handlePassThrough(url) {
    window.open(url);
  }

  render() {
    if (this.props.selectedArticle.content) {
      return (
        <div className="detailed-article-container">
          <div className="detailed-article-deadspace" onClick={this.handleCloseDetail}>
            <div className="tab-container">
              <div className="tab"/>
              <div className="x">X</div>
            </div>
          </div>
          <div className="detailed-article-headline">

              <h1
                onClick={() => this.handlePassThrough(this.props.selectedArticle.link)}
                >{this.props.selectedArticle.title}</h1>

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
