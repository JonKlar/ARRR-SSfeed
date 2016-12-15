import React from 'react';
import { connect } from 'react-redux';
import { createArticle, destroyArticle } from '../../actions/articles_actions';


class ArticleSaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickSave = this.handleClickSave.bind(this);
  }


  saved() {
    const savedArticles = this.props.currentUser.savedArticles;
    if (savedArticles.length === 0) {
      return false;
    }
    for (let i = 0 ; i < savedArticles.length ; i++) {
      if (savedArticles[i].link === this.props.article.link) {
        return true;
      }
    }
    return false;
  }

  handleClickSave() {
    if (this.saved()) {
      this.props.unsaveArticle(this.props.article);
    } else {
      this.props.saveArticle(this.props.article);
    }
  }

  render() {
    let buttonClass = "";
    let buttonText = "Save For Later";

    if (this.saved()) {
      buttonClass = "saved";
      buttonText = "Unsave";
    }
    return (
      <button className="saved"
        onClick={this.handleClickSave}
        >{buttonText}</button>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  saveArticle: (article) => dispatch(createArticle(article)),
  unsaveArticle: (article) => dispatch(destroyArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleSaveButton);
