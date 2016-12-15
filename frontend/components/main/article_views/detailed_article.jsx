import React from 'react';
import DateHelper from '../../../util/date_util';
import ArticleSaveButton from '../article_save_button';

class DetailedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: ""
    };
    this.handleCloseDetail = this.handleCloseDetail.bind(this);
    this.handlePassThrough = this.handlePassThrough.bind(this);
  }

  // componentWillReceiveProps(){
  //   window.setTimeout( () => this.setState({loaded: "loaded"}), 100);
  // }

  handleCloseDetail(e) {
    this.props.clearSelectedArticle();
    this.setState( { loaded: "" } );

  }

  handlePassThrough(url) {
    window.open(url);
  }

  render() {
    if (this.props.selectedArticle.content) {
      if (this.state.loaded === ""){
      window.setTimeout( () => this.setState({loaded: "loaded"}), 10);
      }
      return (
        <div className={`detailed-article-container ${this.state.loaded}`}>
          <div className="detailed-article-deadspace" onClick={this.handleCloseDetail}>
          </div>
          <div className="detailed-article-headline">
            <div className="tab-container"
              onClick={this.handleCloseDetail}>
              <div className="tab"/>
              <div className="x">X</div>
            </div>
              <h1
                onClick={() => this.handlePassThrough(this.props.selectedArticle.link)}
                >{this.props.selectedArticle.title}
              </h1>
            <h2>{this.props.selectedArticle.author}</h2>
            <h3>{DateHelper.time_ago_in_words_with_parsing(this.props.selectedArticle.publishedDate)}</h3>
            <h4><ArticleSaveButton article={this.props.selectedArticle}/></h4>
          </div>
          <article className={`detailed-article ${this.state.loaded}`}
            dangerouslySetInnerHTML={{__html: this.props.selectedArticle.content }}>
          </article>
        </div>
      );
    } else {
      return (<div className="hidden-detailed-article"/>);
    }
  }
}

export default DetailedArticle;
