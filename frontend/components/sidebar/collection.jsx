import React from 'react';


class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      open: true
    };
    this.handleCollectionOpen = this.handleCollectionOpen.bind(this);
  }

  handleCollectionOpen(e) {
    this.setState({open: !this.state.open});
  }

  render() {
    let openness = "";
    if (this.state.open) {
      openness = "open";
    }

    let feeds = this.props.collection.feeds.map( (feed) => (
       <li className="feed" key={feed.title}>
         <img src={`http://www.google.com/s2/favicons?domain_url=${feed.link}`} className="favicon"/>
         <h4 className="sidebar-feed-title">{feed.title}</h4>
       </li>
      ));


    return(
      <div className={`feeds-container ${openness}`} >
        <div className="chevron" onClick={ this.handleCollectionOpen }/>
        <h3 className="collection-title">
          {this.props.collection.title}
        </h3>
        <ul className="feeds">
          { feeds }
        </ul>
      </div>
    );
  }
}

export default Collection;
