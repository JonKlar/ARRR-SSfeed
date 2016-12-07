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

    return(
      <div className={`feeds-container ${openness}`} >
        <div className="chevron" onClick={ this.handleCollectionOpen }/>
        <h3 className="collection-title">
          {this.props.collection.title}
        </h3>
        <ul className="feeds">
          <li className="feed">this is a feed</li>
          <li>this is another feed</li>
        </ul>
      </div>
    );
  }
}

export default Collection;
