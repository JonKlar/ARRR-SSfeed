
import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import DetailedArticleContainer from './main/article_views/detailed_article_container';
import { getArticles } from '../actions/articles_actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const collections = this.props.currentUser.collections;
    collections.forEach((collection) => {
      let feeds = collection.feeds;
      feeds.forEach ((feed) => this.props.getArticles(feed));
    });
    // const feed = collections[0].feeds[0];
    // this.props.getArticles();
  }

  render() {
    return (
      <div>
        <SidebarContainer router={ this.props.router } children={ this.props.children }/>
        <DetailedArticleContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getArticles: (feed) => dispatch(getArticles(feed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
