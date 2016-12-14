import React from 'react';
import { connect } from 'react-redux';
import { setSelectedCollection, setSelectedFeed } from '../../actions/selected_actions';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      open: true
    };
    this.handleCollectionOpen = this.handleCollectionOpen.bind(this);
    this.handleOpenCollectionView = this.handleOpenCollectionView.bind(this);
    this.handleOpenFeedView = this.handleOpenFeedView.bind(this);
  }

  handleCollectionOpen(e) {
    this.setState({open: !this.state.open});
  }

  handleOpenCollectionView(e) {
    this.props.setSelectedCollection(this.props.collection);
    localStorage.collection = JSON.stringify(this.props.collection);
    this.props.router.push('/collection_view');
  }

  handleOpenFeedView(feed) {
    this.props.setSelectedFeed(feed);
    localStorage.feed = JSON.stringify(feed);
    this.props.router.push('/feed_view');
  }

  render() {
    let openness = "";
    if (this.state.open) {
      openness = "open";
    }

    let feeds = this.props.collection.feeds.map( (feed) => (
       <li className="feed" key={feed.id}>
         <img src={`http://www.google.com/s2/favicons?domain_url=${feed.link}`} className="favicon"/>
         <h4 className="sidebar-feed-title" onClick={() => this.handleOpenFeedView(feed)}>{feed.title}</h4>
       </li>
      ));


    return(
      <div className={`feeds-container ${openness}`} >
        <div className="chevron" onClick={ this.handleCollectionOpen }/>
        <h3 className="collection-title" onClick={this.handleOpenCollectionView}>
          {this.props.collection.title}
        </h3>
        <ul className="feeds">
          { feeds }
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedCollection: (collection) => dispatch(setSelectedCollection(collection)),
  setSelectedFeed: (feed) => dispatch(setSelectedFeed(feed)),
});

const mapStateToProps = (state) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
