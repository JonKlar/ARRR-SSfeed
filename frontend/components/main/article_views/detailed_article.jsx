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
    this.setState( { loaded: "unload" } );
    window.setTimeout( () => {
      this.props.clearSelectedArticle();
      this.setState( { loaded: "" } );
    }, 100);
  }

  handlePassThrough(url) {
    window.open(url);
  }

  render() {
    if (this.props.selectedArticle.description) {
      if (this.state.loaded === ""){
      window.setTimeout( () => this.setState({loaded: "loaded"}), 10);
      }
      let creator = this.props.selectedArticle.author;
      if (this.props.selectedArticle.creator) {
        creator = this.props.selectedArticle.creator.content;
        if (typeof creator !== "string") {
          creator = this.props.selectedArticle.creator;
        }
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
            <h2>{creator}</h2>
            <h3>{DateHelper.time_ago_in_words_with_parsing(this.props.selectedArticle.pubDate)}</h3>
            <h4><ArticleSaveButton article={this.props.selectedArticle}/></h4>
          </div>
          <article className={`detailed-article ${this.state.loaded}`}
            dangerouslySetInnerHTML={{__html: this.props.selectedArticle.description }}>
          </article>
        </div>
      );
    } else {
      return (<div className="hidden-detailed-article"/>);
    }
  }
}

export default DetailedArticle;
