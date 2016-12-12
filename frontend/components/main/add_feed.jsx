import React from 'react';

class AddFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: "unloaded",
      collectionTitle: ""
    };
    this.handleClose = this.handleClose.bind(this);
    this.toggleSubscribe = this.toggleSubscribe.bind(this);
    this.handleCreateCollection = this.handleCreateCollection.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    window.setTimeout( () => this.setState({loaded: "loaded"}), 100);
  }



  handleClose() {
    this.props.router.push('feeds/');
  }

  handleCreateCollection(e) {
    e.preventDefault();
    if (this.state.collectionTitle.length !== 0) {
      this.props.createCollection({
        title: this.state.collectionTitle
      });
    }
  }

  handleInput(e) {
    this.setState({collectionTitle: e.currentTarget.value});
  }

  toggleSubscribe(collection) {
    if (this.isFollowed(collection) === "followed"){
      this.props.removeFeed(collection, this.props.feed).then(
        ( () => {
          if (collection.feeds.length === 1) {
            this.props.destroyCollection(collection);
          }
        })
      );
    } else {
      this.props.addFeed(collection, this.props.feed);
    }
  }


  isFollowed(collection) {
    if (collection.feeds.length === 0) {
      return "";
    }

    for (let i = 0 ; i < collection.feeds.length ; i++) {
      if (collection.feeds[i].id === this.props.feed.id) {
        return "followed";
      }
    }
    return "";
  }


  render() {

    const collections = this.props.collections.map( (collection) => (
      <li className= {`aftc-collection ${this.isFollowed(collection)}`}
         key={ collection.id }
         onClick={ () => this.toggleSubscribe(collection) }>
         {collection.title}
       </li>
    ));

    return(
      <div className={`add-feed-to-collection ${this.state.loaded}`}>
        <sidebar className="aftc-sidebar">
          <h2>Select the collections you would like to add this feed to</h2>
          <h3>{ this.props.feed.title }</h3>
          <form className="create-collection-form" onSubmit={ this.handleCreateCollection }>
            <input value={this.state.collectionTitle}
               placeholder="Create New Collection"
               maxLength="15"
               className="create-collection-input"
               onInput={this.handleInput}/>
             <button className="create-collection-button">+</button>
          </form>
          <ul className = "aftc-collection-list">
          { collections }
          </ul>
          <section className="aftc-footer">
            <button className="close" onClick={this.handleClose}> close </button>
          </section>
        </sidebar>
        <span className="afts-dead-space" onClick={this.handleClose}/>

      </div>
    );
  }
}

export default AddFeed;
